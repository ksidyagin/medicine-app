import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlacementService } from 'src/app/system/services/placement/placement.service';
import { NgxDadataModule, DadataConfig, DadataType} from '@kolkov/ngx-dadata';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments';
import { Placement } from 'src/app/shared/models/placement.model';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Profiles } from 'src/app/shared/models/profile.model';
import { Patient } from 'src/app/shared/models/patient.model';
import * as moment from 'moment';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  date:string;
  configAddressRegion: DadataConfig
  configAddressCity: DadataConfig;
  configAddressDistrict: DadataConfig;
  configAddressStreet: DadataConfig;
  region_id;
  city_id;
  district_id;
  placementId;
  userId;
  profileId;
  patientId;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router, private placeService: PlacementService,
    private http: HttpClient, private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.configAddressRegion = {
      apiKey: '4088041ce005a1c419a2c0e0108602ed18356206',
      type: DadataType.address,
    };
    this.configAddressCity = {
      apiKey: '4088041ce005a1c419a2c0e0108602ed18356206',
      type: DadataType.address
    };
    this.configAddressDistrict = {
      apiKey: '4088041ce005a1c419a2c0e0108602ed18356206',
      type: DadataType.address,
    };
    this.configAddressStreet = {
      apiKey: '4088041ce005a1c419a2c0e0108602ed18356206',
      type: DadataType.address,
    };

    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      snils: new FormControl(null, [Validators.required, Validators.maxLength(14)]),
      patronymic: new FormControl(null, [Validators.required]),
      dateBirth: new FormControl("", [Validators.required]),
      region: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      district: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
      sex: new FormControl(null, [Validators.required]),
      agree_checkbox: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      
      return;
    }

    let email = this.registerForm.get('email').value;
    let password = this.registerForm.get('password').value;
    let sex;
    if (this.registerForm.get('sex').value === '1') {
      sex = true;
    } 
    else if (this.registerForm.get('sex').value === '0') {
      sex = false;
    }
    let snils = this.registerForm.get('snils').value;
    
    let birthday = moment(this.registerForm.get('dateBirth').value).format('YYYY-MM-DD') + 'T03:51:04.036Z'; 
    console.log(birthday);

    let region = this.registerForm.get('region').value;
    let city = this.registerForm.get('city').value;
    let district = this.registerForm.get('district').value;
    let street = this.registerForm.get('street').value;
    region = region.split(" ")[0];
    city = city.substr(2);
    district = district.split(", ")[1];
    district = district.substr(0, district.length-4)
    // console.log(region);
    // console.log(city);
    // console.log(district);
    // console.log(this.registerForm.get('street').value);
    street = street.split(", ")[1];

    this.http.get(API + '/region/find_by_name/Нижегородская').subscribe((data:any)=>{
      if(data.name === region){
        console.log('region finded: ', data.id);
        this.region_id = data.id;
        this.changeDetection.detectChanges();
        console.log(this.region_id);
      }
      else{
        return;
      }
      this.http.get(API +'/city/find_by_name/'+ city).subscribe((data:any)=>{
        if(data.name === city){
          console.log('city finded: ', data.id);
          this.city_id = data.id;
          this.changeDetection.detectChanges();
          console.log(this.city_id);
        }
        else{
          return;
        }
        this.http.get(API + '/district/find_by_name/'+ district).subscribe((data:any)=>{
          if(data.name === district){
            console.log('district finded: ', data.id);
            this.district_id = data.id;
            this.changeDetection.detectChanges();
            console.log(this.district_id);
          }
          else{
            return;
          }
          let place: Placement = {
            country_id: 1,
            city_id: this.city_id,
            index: 0,
            region_id: this.region_id,
            district_id: this.district_id,
            street: street,
            street_type_id: 1
          }
          this.http.post(API+'/placement', place)
          .subscribe((data:any)=>{
            this.placementId = data.id;
            let userId;
            let profile;
            this.changeDetection.detectChanges();
            this.userService.findUserByEmail(email).subscribe((data:any)=>{
              if(data.email === email){
                userId = data.id;
                profile = {
                  user_id: data.id,
                  profile_id: 0,
                  profile_type: 'patient'
                }
                this.changeDetection.detectChanges();
              }
              else{
                return;
              }

            })

            let profileId;
            this.http.post(API + '/profiles', profile).subscribe((data:any)=>{
              profileId = data.id;
              this.changeDetection.detectChanges();
              console.log('profileId:', data.id);
              let patient = {
                first_name: this.registerForm.get('firstName').value,
                last_name: this.registerForm.get('lastName').value,
                patronymic: this.registerForm.get('patronymic').value,
                sex: sex,
                date_birth: birthday,
                snils: snils,
                age: 0,
                profile_id: profileId,
                user_id: userId,
                placement_id: this.placementId
              }
              this.http.post(API + '/patient', patient).subscribe((data:any)=>{
                this.patientId = data.id;
                this.changeDetection.detectChanges();
                console.log('patientId:', data.id);
                let upd_profile: Profiles = {
                  profile_id: data.id,
                  user_id: userId,
                  profile_type: 'patient'
                }
                this.http.put(API + '/profiles/'+ profileId, upd_profile).subscribe();
                let upd_user: User = {id: userId, email: email, password: password, phone: '', active_sign: true}
                this.userService.updateOne(upd_user).subscribe();
              });
            });

          })
        })
      })
    })
    
    console.log('OK');
    this.goToLogin();
  }

  goToLogin() {
    this.router.navigate(['', 'login']);
  }

  clickCheckbox(){
    console.log(this.registerForm.get('agree_checkbox').value);
  }

}
