using { my.school as db } from '../db/schema';
 
service StudentService {
 
  entity Students as projection on db.Students actions {
        // Define the bound action here
        action approveStudent(); 
    };

  entity Courses  as projection on db.Courses;
  
 
}
