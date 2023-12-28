import { AdminInserts } from '../admin/inserts';
import { AdminUpdates } from '../admin/updates';

export class Admin {
  public inserts : AdminInserts = new AdminInserts();
  public update : AdminUpdates = new AdminUpdates();
  //public deletes : AdminDeletes = new AdminDeletes();
  //public selects : AdminSelects = new AdminSelects();


  
}