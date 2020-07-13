import { Component, OnInit } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';

declare const Kakao: any; // kakao.js에서 사용

@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.scss'],
  providers: [DatePipe]
})
export class CamComponent implements OnInit {

  private KAKAO_JAVASCRIPT_API_KEY = 'e6497dec73871c668e6be70741bed752';

  public guest: string;
  public today: string;
  public date = new Date();

  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  constructor(private cookieService: CookieService, private router: Router, private datePipe: DatePipe) {
    this.guest = this.cookieService.get('bdGuest');
    if (this.guest === undefined) {
      this.router.navigate(['select']);
    }
    this.today = this.datePipe.transform(this.date, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
    Kakao.init(this.KAKAO_JAVASCRIPT_API_KEY);
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  public retryWebcam() {
    this.webcamImage = null;
  }

  public sendImageKakao() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '🌟HBD🌟',
        description: this.today,
        imageUrl: this.webcamImage.imageAsDataUrl,
        link: {
          mobileWebUrl: this.webcamImage.imageAsDataUrl,
          webUrl: this.webcamImage.imageAsDataUrl,
        },
      },
      buttons: [
        {
          title: 'ㄱㄱ 😊',
          link: {
            mobileWebUrl: this.webcamImage.imageAsDataUrl,
            webUrl: this.webcamImage.imageAsDataUrl,
          },
        }
      ]
    });
  }

}
