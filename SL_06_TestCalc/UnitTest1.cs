using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Threading;

namespace SL_06_TestCalc
{
    public class Tests
    {
        private IWebDriver driver;
       
        [OneTimeSetUp]
        public void BeforeAllMethods()
        {
            driver = new ChromeDriver();
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
        }
        
        [SetUp]
        public void Setup()
        {
            driver.Navigate().GoToUrl("http://13.51.44.16/");
        }

        [Test]
        public void Plus()
        {
            driver.FindElement(By.XPath("//*[contains(text(),'5')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'+')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'4')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'=')]")).Click();
            Thread.Sleep(2000);
            IWebElement actual = driver.FindElement(By.ClassName("screen"));
            Assert.True(actual.Text.Contains("5+4=9"));
        }

        [Test]
        public void Minus()
        {
            driver.FindElement(By.XPath("//*[contains(text(),'5')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'*')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'4')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'=')]")).Click();
            Thread.Sleep(2000);
            IWebElement actual = driver.FindElement(By.ClassName("screen"));
            Assert.True(actual.Text.Contains("5*4=20"));
        }

        [Test]
        public void Mnoz()
        {
            driver.FindElement(By.XPath("//*[contains(text(),'5')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'-')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'4')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'=')]")).Click();
            Thread.Sleep(2000);
            IWebElement actual = driver.FindElement(By.ClassName("screen"));
            Assert.True(actual.Text.Contains("5-4=1"));
        }

        [Test]
        public void Dil ()
        {
            driver.FindElement(By.XPath("//*[contains(text(),'5')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'/')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'4')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'=')]")).Click();
            Thread.Sleep(2000);
            IWebElement actual = driver.FindElement(By.ClassName("screen"));
            Assert.True(actual.Text.Contains("5/4=1.25"));
        }

        [Test]
        public void Dil0()
        {
            driver.FindElement(By.XPath("//*[contains(text(),'5')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'/')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'0')]")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("//*[contains(text(),'=')]")).Click();
            Thread.Sleep(2000);
            IWebElement actual = driver.FindElement(By.ClassName("screen"));
            Assert.True(actual.Text.Contains("5/0=undefined"));
        }

        [OneTimeTearDown]
        public void AfterAllMethods()
        {
            driver.Quit();
        }
    }
}