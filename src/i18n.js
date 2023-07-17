import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      English: {
        translation: {
            "AboutUs": {
                "title": "Who we are",
                "description": "Welcome to Ottawa Tutoring, the premier tutoring company in Ontario. We are dedicated to helping students in Canada unlock their full potential, achieve their academic goals, and foster a new level of self-esteem and confidence in their abilities so that they can turn all their dreams into a reality. Since 2008, we have helped thousands of students reach their goals for test prep and academic success. For over a decade, we have been passionately working to develop innovative educational programs that help pique the interests of students and instill in them a new love of learning, growth, and academic success. In our minds, every student has the ability to strive for results, but sometimes, they need a little bit of help to get there.",
                "tutorstitle" : "Our tutors",
                "tutors": "Each year, OttawaTutoring.com receives more than 100,000 applications from prospective tutors. Every applicant is rigorously tested and vetted. Applicants must demonstrate their subject-matter expertise, effective tutoring methodology, mastery of our online environment, and understanding of OttawaTutoring’s pedagogy and policies.",
                "contactustitle": "Contact Us",
                "contactus": "If you have any questions, please send an email to info@ottawatutoring.com"
              },

              "Navbar": {
                "Home": "Home",
                "OurTutors": "Our Tutors",
                "StudyGroups": "Study Groups",
                "AboutUs": "About Us",
              }
        }
      },
      French: {
        translation: {
            "AboutUs": {
                "title": "Qui nous sommes",
                "description": "Bienvenue à Ottawa Tutroing, la première entreprise de tutorat en Ontario. Nous nous engageons à aider les étudiants canadiens à libérer leur plein potentiel, à atteindre leurs objectifs académiques et à favoriser un nouveau niveau d'estime de soi et de confiance en leurs capacités afin qu'ils puissent transformer tous leurs rêves en réalité. Depuis 2008, nous avons aidé des milliers d'étudiants à atteindre leurs objectifs de préparation aux tests et de réussite scolaire. Depuis plus d'une décennie, nous travaillons avec passion pour développer des programmes éducatifs innovants qui aident à piquer l'intérêt des étudiants et à leur insuffler un nouvel amour de l'apprentissage, de la croissance et de la réussite scolaire. Dans notre esprit, chaque élève a la capacité de rechercher des résultats, mais parfois, il a besoin d'un peu d'aide pour y parvenir.",
                "tutorstitle" : "Nos Tuteurs",
                "tutors": "Chaque année, OttawaTutoring.com reçoit plus de 100 000 candidatures de tuteurs potentiels. Chaque candidat est rigoureusement testé et approuvé. Les candidats doivent démontrer leur expertise en la matière, leur méthodologie de tutorat efficace, leur maîtrise de notre environnement en ligne et leur compréhension de la pédagogie et des politiques d'OttawaTutoring.",
                "contactustitle": "Contactez-nous",
                "contactus": "Si vous avez des questions, veuillez envoyer un courriel à info@ottawatutoring.com"
              },

              "Navbar": {
                "Home": "Accueil",
                "OurTutors": "Nos Tuteurs",
                "StudyGroups": "Groupes d'étude",
                "AboutUs": "À propos de nous",
              }
        }
      }
    },
    lng: "English", // if you're using a language detector, do not define the lng option
    fallbackLng: "English",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });



export default i18n;  