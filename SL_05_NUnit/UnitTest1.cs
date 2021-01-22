using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;

namespace SL_05_NUnit
{
    [TestFixture]
    public class Tests
    {
        private IWebDriver driver;

        [OneTimeSetUp]
        public void BeforeAllMethods()
        {
            driver = new ChromeDriver();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            driver.Manage().Window.Maximize();
        }

        [SetUp]
        public void Setup()
        {
            driver.Navigate().GoToUrl("https://google.com.ua/");
        }

        [Test]
        public void Test2()
        {
            //IWebElement input = driver.FindElement(By.XPath("//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input"));

            //input.SendKeys("github");
            //input.SendKeys(Keys.Return);
            //IWebElement link = driver.FindElement(By.XPath("//*[contains(text(),'GitHub: Where the world builds software · GitHub')]"));            
            //link.Click();

            //driver.FindElement(By.ClassName("form-control")).SendKeys("eloyEntony" + Keys.Return);
            //driver.FindElement(By.XPath("//*[contains(text(),'Users')]")).Click();

            //IWebElement actual = driver.FindElement(By.LinkText("eloyEntony"));

            //Assert.True(actual.Text.Contains("eloyEntony"));

            //Screenshot image = ((ITakesScreenshot)driver).GetScreenshot();
            //image.SaveAsFile("C:/Users/Anton/Pictures/Screenshot.png", ScreenshotImageFormat.Png);
        }
        [Test]
        public void Test1()
        {
            IWebElement input = driver.FindElement(By.XPath("//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input"));

            input.SendKeys("twitch");
            input.SendKeys(Keys.Return);
            IWebElement link = driver.FindElement(By.XPath("//*[contains(text(),'Twitch')]"));
            link.Click();

            driver.FindElement(By.CssSelector("#tw-073d9eb7411cfe8e89a0420440b7b632")).SendKeys("Pubg" + Keys.Return);
            //driver.FindElement(By.XPath("//*[contains(text(),'Users')]")).Click();

            //IWebElement actual = driver.FindElement(By.LinkText("eloyEntony"));

            //Assert.True(actual.Text.Contains("eloyEntony"));

            //Screenshot image = ((ITakesScreenshot)driver).GetScreenshot();
            //image.SaveAsFile("C:/Users/Anton/Pictures/Screenshot.png", ScreenshotImageFormat.Png);


        }




        [OneTimeTearDown]
        public void AfterAllMethods()
        {
            driver.Quit();
        }
    }
}