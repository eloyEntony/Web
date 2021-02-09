using ASP_01_TestProject.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_01_TestProject.Controllers
{
    public class HomeController : Controller
    {
        private IContactRepository contactRepository;
       
        public HomeController(IContactRepository contactRepository)
        {
            this.contactRepository = contactRepository;
        }

        [HttpGet]
        public IActionResult Index()
        {
            //Contact model = contactRepository.GetContact(1);

            //List<Contact> contacts = db.;
            //Console.WriteLine(contacts.Count);
            return View(contactRepository.GetContacts());
        }

        [HttpPost]
        public IActionResult Index( string name, string email, string address, string phone, string position, string nick)
        {
            Contact newContact = new Contact() { Name = name , Address = address, Email = email, Phone = phone, Position = position, Nikname = nick};
            //db.Contacts.Add(newContact);
            //db.SaveChanges();



           contactRepository.AddContact(newContact);
            //var model = contactRepository.GetContacts();

            return RedirectToAction("Index");
        }
        public IActionResult About()
        {
            return View();
        }
        [HttpGet]
        public IActionResult User(int id)
        {
            var model = contactRepository.GetContact(id);

            if(model== null)
            {
                Response.StatusCode = 404;
                return View("NotFound");
            }
            return View(model);
        }
        [HttpPost]
        public IActionResult User(int id, string name, string email, string address, string phone, string position, string nick)
        {
            Contact tmp = new Contact() {Id = id, Name = name, Address = address, Email = email, Phone = phone, Position = position, Nikname = nick };
            contactRepository.Update(tmp);
            return RedirectToAction("User");
        }

        [HttpGet]
        public IActionResult Delete(int id)
        {
            contactRepository.Delete(id);
            return RedirectToAction("Index");
        }

        public IActionResult Favorite()
        {
            var model = contactRepository.GetFavorite();
            return View(model);
        }


    }
}
