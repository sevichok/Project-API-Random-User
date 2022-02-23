export interface DataTypes {
  gender: string;
  cell: string;
  name: UserName;
  email: string;
  phone: string;
  location: UserLocation;
  picture: UserPicture;
}

export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserLocation {
  city: string;
  country: string;
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
