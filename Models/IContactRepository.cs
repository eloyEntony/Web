using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_01_TestProject.Models
{
    public interface IContactRepository
    {
        Contact GetContact(int Id);

        List<Contact> GetContacts();

        void AddContact(Contact contact);

        Contact Update(Contact contact);
        void Delete(int id);

        List<Contact> GetFavorite();
    }
}
