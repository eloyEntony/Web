using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Interactions;
using System;
using System.Threading;
namespace SL_04_youtube
{

    class EntryPoint
    {
        static void Main(string[] args)
        {

            for (int i = 0; i < 3; i++)
            {
                IWebDriver driver = new ChromeDriver();

                driver.Navigate().GoToUrl("https://www.google.com.ua/?hl=ru");

                IWebElement input = driver.FindElement(By.XPath("//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input"));

                input.SendKeys("!_!_!_КОТ_ИСПУГАЛСЯ_ЗЕРКАЛА_!_!_!");
                input.SendKeys(Keys.Return);


                IWebElement link = driver.FindElement(By.XPath("//*[@id=\"rso\"]/div[1]/div/div[2]/div[1]/div/a"));
                link.Click();
                //IWebElement play = driver.FindElement(By.ClassName("ytp-play-button"));
                //play.Click();

                Thread.Sleep(50000);

                driver.Quit();
            }
        }
    }


}
