using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_01_TestProject.Models
{
    public class MockContactRepository : IContactRepository
    {
        private List<Contact> _contacts;
        public MockContactRepository()
        {
            _contacts = new List<Contact>() {
                new Contact()
                {
                    Id = 1,
                    Name = "Bob",
                    Nikname = "Bobka",
                    Address = "San Francisco, California, United States",
                    Position = "Software Engineer",
                    Avatar = "https://bootdey.com/img/Content/avatar/avatar1.png",
                    Email = "abracadabra@gmail.com",
                    Phone = "+63 912 212 2451"
                },
                new Contact()
                {
                    Id = 2,
                    Name = "Mack",
                    Nikname = "Macysia",
                    Address = "San Francisco, California, United States",
                    Position = "Software Engineer",
                    Avatar = "https://bootdey.com/img/Content/avatar/avatar2.png",
                    Email = "vcb126435ff@gmail.com",
                    Phone = "+63 432 456 1321"
                },
                new Contact()
                {
                    Id = 3,
                    Name = "Bill",
                    Nikname = "Bilka",
                    Address = "San Francisco, California, United States",
                    Position = "Software Engineer",
                    Avatar = "https://bootdey.com/img/Content/avatar/avatar3.png",
                    Email = "erw3142fjs@gmail.com",
                    Phone = "+63 588 212 5643"
                },
                new Contact()
                {
                    Id = 4,
                    Name = "Boba",
                    Nikname = "Loba",
                    Address = "San Francisco, California, United States",
                    Position = "Software Engineer",
                    Avatar = "https://bootdey.com/img/Content/avatar/avatar4.png",
                    Email = "dsfnvcxp@gmail.com",
                    Phone = "+63 466 212 7654"
                },

            };
           
        }
        public Contact GetContact(int Id)
        {
            return _contacts.FirstOrDefault(x=>x.Id == Id);
        }

        public List<Contact> GetContacts()
        {
            return _contacts;
        }
    }
}
