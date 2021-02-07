using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using System;
using System.IO;
using System.Threading;

namespace SL_07_SendMail
{
    class EntryPoint
    {
        static void Main(string[] args)
        {
            IWebDriver driver = new ChromeDriver();
            driver.Navigate().GoToUrl("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1612705693&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26RpsCsrfState%3d47dff48d-8625-7c8d-312d-878fcfb451b2&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c");

            
                driver.FindElement(By.Name("loginfmt")).SendKeys(".........");
                driver.FindElement(By.Id("idSIButton9")).Click();

                driver.FindElement(By.Name("passwd")).SendKeys("...........");

                Thread.Sleep(2000);
                driver.FindElement(By.XPath("//*[@id='lightbox']/div[2]/div[2]/div/div[2]/div/div[3]/div[2]/div/div/div/div")).Click();

                Thread.Sleep(5000);
                driver.FindElement(By.XPath("//*[@id='app']/div/div[2]/div[1]/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[1]/div[1]/button/span")).Click();

                Thread.Sleep(5000);
                driver.FindElement(By.XPath("//*[@id='ReadingPaneContainerId']/div/div/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div/div[1]/div/div/input")).SendKeys("kozyar.ant@gmail.com");
                driver.FindElement(By.XPath("//input[@aria-label='Добавьте тему']")).SendKeys("Selenim");
                driver.FindElement(By.XPath("//*[@id='ReadingPaneContainerId']/div/div/div/div[1]/div[2]/div[1]")).SendKeys("барашка");

                driver.FindElement(By.XPath("//*[@id='ReadingPaneContainerId']/div/div/div/div[1]/div[3]/div[2]/div[1]/div/span/button[1]/span")).Click();


        }
    }
}
