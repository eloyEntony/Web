using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Interactions;
using System;
using System.Threading;

namespace SL_03
{
    class EntryPoint
    {
        static void Main(string[] args)
        {
            IWebDriver driver = new ChromeDriver();
            driver.Navigate().GoToUrl("https://rivne.itstep.org");

            string tel = "+38 (067) 557-87-04";

            IWebElement telef = driver.FindElement(By.LinkText("+38 (067) 557-87-04"));
            if (telef.Text == tel);

            Actions action = new Actions(driver);

            IWebElement forms = driver.FindElement(By.XPath("//*[@id=\"academy_app\"]/header/div[3]/nav/ul/li[1]/button"));
            Console.WriteLine(forms.Text);
            action.MoveToElement(forms).Perform();

            Thread.Sleep(1000);

            try
            {
                IWebElement roz = driver.FindElement(By.LinkText("Розробка програмного забезпечення"));
                Console.WriteLine("GOOOD");
            }
            catch { }

        }
    }
}
