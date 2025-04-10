import React from "react";

export default function AzarPortfolio() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Azarudheen A</h1>
          <p className="text-lg text-gray-600">Senior Software Test Engineer</p>
          <p className="text-gray-600 mt-2">Email: azarallaudheena@gmail.com | Phone: +91 97914 31876</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Career Objective</h2>
          <p className="text-gray-700">To work with a professional organization where intellectual stimulation, hard work, and commitment are appreciated.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Professional Synopsis</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>4+ years of experience in Software Testing</li>
            <li>Strong in Manual and Automation Testing</li>
            <li>Experience in frameworks: Data-driven, POM, BDD, TDD (TestNG)</li>
            <li>Automation with Selenium, Playwright, Appium, Rest Assured</li>
            <li>Skilled in Java, Maven, Git, JIRA, SQL</li>
            <li>Experience in Agile methodology</li>
            <li>Domains: e-commerce, travel, transport, health monitoring</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <strong>Languages:</strong> Core Java<br />
              <strong>Testing Tools:</strong> Selenium WebDriver, Postman, Playwright, Appium, RestAssured<br />
              <strong>Frameworks:</strong> Cucumber, TestNG, POM, Apache POI
            </div>
            <div>
              <strong>Version Control:</strong> Git<br />
              <strong>Build Tools:</strong> Maven<br />
              <strong>Agile Tools:</strong> JIRA
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Professional Experience</h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800">VVDN Technologies Pvt Ltd (Nov 2022 - Present)</h3>
            <p className="italic text-gray-600">Senior Software Test Engineer</p>
            <p className="mt-2 text-gray-700">
              <strong>Cleared C4 (POC)</strong> - Automated API POST method using Rest Assured, reduced manual effort for 600+ daily JPG uploads.
              Reduced execution time from 9 minutes to less than 1. Enhanced accuracy by 80%.
            </p>
            <p className="mt-2 text-gray-700">
              <strong>NETGEAR Insight</strong> - Automated web & mobile app testing using Playwright with POM and Cucumber.
              Developed and executed regression test suites, reported bugs, and maintained version control using Git.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800">HCL Technologies Pvt Ltd (Dec 2018 - Nov 2022)</h3>
            <p className="italic text-gray-600">Software Test Engineer</p>
            <p className="mt-2 text-gray-700">
              <strong>Crazysales</strong> - Automated e-commerce testing with Selenium, Cucumber, and POM.
              Designed test cases, executed regression tests, and participated in Agile ceremonies.
            </p>
            <p className="mt-2 text-gray-700">
              <strong>AirCalin</strong> - Conducted manual and automated testing using Selenium and TestNG.
              Created BDD tests, wrote feature files, participated in Agile sprints.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Education</h2>
          <p className="text-gray-700">Bachelor’s in Mechanical Engineering - Pollachi Institute of Engineering and Technology</p>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-12">
          <p>&copy; 2025 Azarudheen A. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
