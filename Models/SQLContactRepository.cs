using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_01_TestProject.Models
{
    public class SQLContactRepository : IContactRepository
    {
        private readonly AppDBContext context;
        public SQLContactRepository(AppDBContext context)
        {
            this.context = context;
        }
       
        public void AddContact(Contact contact)
        {
            context.Contacts.Add(contact);
            context.SaveChanges();
            
        }

        public void Delete(int id)
        {
            var tmp = context.Contacts.FirstOrDefault(x => x.Id == id);
            context.Contacts.Remove(tmp);
            context.SaveChanges();
        }

        public Contact GetContact(int Id)
        {
            return context.Contacts.FirstOrDefault(x => x.Id == Id);
        }

        public List<Contact> GetContacts()
        {
            return context.Contacts.ToList();
        }

        public List<Contact> GetFavorite()
        {
            return context.Contacts.Where(x => x.isFavorite == true).ToList();
        }

        public Contact Update(Contact contact)
        {
            Contact tmp = context.Contacts.FirstOrDefault(x => x.Id == contact.Id);

            tmp.Name = contact.Name;
            tmp.Nikname = contact.Nikname;
            tmp.Phone = contact.Phone;
            tmp.Position = contact.Position;
            tmp.Address = contact.Address;
            tmp.Avatar = contact.Avatar;
            tmp.Email = contact.Email;

            context.SaveChanges();

            return context.Contacts.FirstOrDefault(x => x.Id == contact.Id);
        }
    }
}
