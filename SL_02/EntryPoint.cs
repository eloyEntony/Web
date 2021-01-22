using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Threading;

namespace SL_02
{
    class EntryPoint
    {
        static void Main(string[] args)
        {
            ChromeOptions options = new ChromeOptions();
            options.AddArgument("--disable-gpu");
            options.AddArgument("--headless");

            IWebDriver driver = new ChromeDriver(options);
            driver.Navigate().GoToUrl("https://rutracker.net/forum/index.php");
            //IWebElement login;
            //try
            //{
            //    login = driver.FindElement(By.Id("top-login-uname"));
            //    if (login.Displayed)
            //        WriteGreen("Login element is visible: True");
            //    else
            //        WriteRed("Login element is visible: False");
            //}
            //catch(NoSuchElementException)
            //{
            //    WriteRed("This element not found!");
            //}


            IWebElement btnLogin = driver.FindElement(By.LinkText("Вход"));
            
            btnLogin.Click();


            IWebElement loginName = driver.FindElement(By.Id("top-login-uname"));
            IWebElement pass = driver.FindElement(By.Id("top-login-pwd"));
            loginName.SendKeys("Cyber1993");
            pass.SendKeys("Cyber1993");

            IWebElement btnLogin2 = driver.FindElement(By.Id("top-login-btn"));
            btnLogin2.Click();
            Thread.Sleep(1000);


            IWebElement input = driver.FindElement(By.Id("search-text"));
            input.SendKeys("Jeffrey Richter");

            IWebElement search = driver.FindElement(By.Id("search-submit"));
            search.Click();

            IWebElement book = driver.FindElement(By.CssSelector("#trs-tr-4266854 > td.row4.med.tLeft.t-title-col > div.wbr.t-title > a"));
            book.Click();

            IWebElement download = driver.FindElement(By.ClassName("dl-topic"));
            download.Click();

            IWebElement logout = driver.FindElement(By.ClassName("log-out-icon"));
            logout.Click();


            Thread.Sleep(5000);
            driver.Quit();
        }

        private static void WriteRed(string message)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine(message);
            Console.ForegroundColor = ConsoleColor.White;
        }

        private static void WriteGreen(string message)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(message);
            Console.ForegroundColor = ConsoleColor.White;
        }
    }
}
