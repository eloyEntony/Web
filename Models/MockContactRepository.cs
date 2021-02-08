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
                    Avatar = "1.png",
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
                    Avatar = "2.png",
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
                    Avatar = "3.png",
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
                    Avatar = "4.png",
                    Email = "dsfnvcxp@gmail.com",
                    Phone = "+63 466 212 7654"
                },
                new Contact()
                {
                    Id = 5,
                    Name = "Makitra",
                    Nikname = "Kit",
                    Address = "San Francisco, San-Andreas, United States",
                    Position = "Software Engineer",
                    Avatar = "",
                    Email = "makitra@gmail.com",
                    Phone = "+63 544 651 0000"
                },

            };
           
        }

        public void AddContact(Contact contact)
        {
            _contacts.Add(new Contact() { Name = contact.Name, 
                                            Address = contact.Address, 
                                            Email = contact.Email,                                            
                                            Nikname = contact.Nikname, 
                                            Phone = contact.Phone, 
                                            Position = contact.Position,
                                            Id = _contacts.Count + 1,
                                            Avatar = ""
            });
        }

        public void Delete(Contact contact)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Contact GetContact(int Id)
        {
            return _contacts.FirstOrDefault(x=>x.Id == Id);
        }

        public List<Contact> GetContacts()
        {
            return _contacts;
        }

        public List<Contact> GetFavorite()
        {
            throw new NotImplementedException();
        }

        public Contact Update(Contact contact)
        {
            throw new NotImplementedException();
        }
    }
}
