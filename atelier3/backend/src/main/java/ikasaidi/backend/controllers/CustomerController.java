package ikasaidi.backend.controllers;

import ikasaidi.backend.model.Customer;
import ikasaidi.backend.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ika")
@CrossOrigin() //permet d'enlever l'erreur
public class CustomerController {

    @Autowired
    CustomerRepository repository;

    @PostMapping("/newCust")
    public Customer createCust(@RequestBody Customer customer){
        repository.save(customer);
        return customer;
    }
}
