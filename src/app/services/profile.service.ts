import { Injectable } from "@angular/core";
import { UserProfile } from "../user-profile";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  // private userProfile: UserProfile;

  private userProfile: UserProfile = {
    contact: "ivan@dr3am.space",
    bio: "a motivated front end developer",
    name: "ivan"
  };
  getUserProfile(): UserProfile {
    // alert(this.userProfile.name);
    return this.userProfile;
  }
  setUserProfile(newProfile: UserProfile): void {
    this.userProfile = newProfile;
  }
  constructor() {}
}
