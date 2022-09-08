export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export interface IGeo {
  lat: string
  lng: string
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IGeo
}

export interface ICompany {
  name: string
  catchPhrase: string
  bs: string
}

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: ICompany
}

export interface IPhoto {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
