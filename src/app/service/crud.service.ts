import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }
create_Newemployee(id: string ,Record: any)
{
  console.log(Record)
  return this.fireservices.collection('Employee').doc(id).set(Record);
}
update(id: string,Record:any)
{
  console.log(Record)
  return this.fireservices.collection('Employee').doc(id).update(Record);
}


}

