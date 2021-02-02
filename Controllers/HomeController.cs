using ASP_01_TestProject.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_01_TestProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly IContactRepository contactRepository;
        Contact model; 
        public HomeController(IContactRepository repository)
        {
            this.contactRepository = repository;            
        }
        public IActionResult Index()
        {
            //Contact model = contactRepository.GetContact(1);

            List<Contact> contacts = contactRepository.GetContacts();
            //Console.WriteLine(contacts.Count);
            return View(contacts);
        }
        public IActionResult About()
        {
            return View();
        }

        public IActionResult User(int id)
        {
            var model = contactRepository.GetContact(id);
            return View(model);
        }


    }
}
