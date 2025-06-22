// js/header.js

document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('languageSelect');
  const navHome = document.getElementById('navHome');
  const navAbout = document.getElementById('navAbout');
  const servicesDropdown = document.getElementById('servicesDropdown');
  const serviceTrading = document.getElementById('serviceTrading');
  const serviceBuilding = document.getElementById('serviceBuilding');
  const serviceDigital = document.getElementById('serviceDigital');
  const consultBtn = document.getElementById('consultBtn');
  const modalTitle = document.getElementById('consultationModalLabel');
  const nameLabel = document.querySelector('label[for="nameInput"]');
  const ageLabel = document.querySelector('label[for="ageInput"]');
  const purposeLabel = document.querySelector('label[for="purposeInput"]');
  const emailLabel = document.querySelector('label[for="emailInput"]');
  const submitBtn = document.querySelector('#consultationForm button[type="submit"]');

  const translations = {
    EN: {
      home: 'Home', about: 'About Us', services: 'Services',
      trading: 'Trading Solutions', building: 'Building and Contracting', digital: 'Digital Solutions',
      free: 'Get Free Consultation', modalTitle: 'Free Consultation',
      name: 'Name', age: 'Age', purpose: 'Purpose of Visiting', email: 'Email', submit: 'Submit'
    },
    AR: {
      home: 'الرئيسية', about: 'من نحن', services: 'الخدمات',
      trading: 'حلول التداول', building: 'البناء والمقاولات', digital: 'الحلول الرقمية',
      free: 'احصل على استشارة مجانية', modalTitle: 'استشارة مجانية',
      name: 'الاسم', age: 'العمر', purpose: 'غرض الزيارة', email: 'البريد الإلكتروني', submit: 'إرسال'
    }
  };

  languageSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';

    const t = translations[lang];
    navHome.textContent = t.home;
    navAbout.textContent = t.about;
    servicesDropdown.textContent = t.services;
    serviceTrading.textContent = t.trading;
    serviceBuilding.textContent = t.building;
    serviceDigital.textContent = t.digital;
    consultBtn.textContent = t.free;
    modalTitle.textContent = t.modalTitle;
    nameLabel.textContent = t.name;
    ageLabel.textContent = t.age;
    purposeLabel.textContent = t.purpose;
    emailLabel.textContent = t.email;
    submitBtn.textContent = t.submit;
  });
});
