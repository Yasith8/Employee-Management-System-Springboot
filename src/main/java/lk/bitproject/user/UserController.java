package lk.bitproject.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class UserController {

     
    @Autowired
    private UserDao dao;

    @RequestMapping(value="/user")
	public ModelAndView userUi(){
		ModelAndView userView=new ModelAndView();
		userView.setViewName("user.html");
		return userView;
	}

     @GetMapping(value="/user/alldata",produces = "application/json")
    public List<User> allEmployeeData(){
        return dao.findAll();
    }

 /*    @PostMapping(value="/user")
    public String addUser(@RequestBody User user) {
        try {
             //set auto genarated value
        user.setUserno("006");
        dao.save(user);
        return "OK";
        } catch (Exception e) {
            return "Save not completed :" + e.getMessage();
        }
        
        
    } */
    

    @DeleteMapping(value = "/user")
    public String deleteUser(@RequestBody User user){
        //authentication and autherization

        //existing check

        try {
            //hard delete
            //dao.delete(employee)
            dao.delete(dao.getReferenceById(user.getId()));

            //soft delete

            //operation

            return "OK";
        } catch (Exception e) {
            return "Delete not Completed : "+e.getMessage();
        }
    }
}
