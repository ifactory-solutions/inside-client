import { Step1Form, Step2Form, Step3Form, Step4Form } from '../../forms';

export const formSteps = [
  {
    title: 'Informações Pessoais',
    key: 'personalInfo',
    content: Step1Form,
  },
  {
    title: 'Endereço',
    key: 'address',
    content: Step2Form,
  },
  {
    title: 'Contatos',
    key: 'contacts',
    content: Step3Form,
  },
  {
    title: 'Documentação',
    key: 'documentation',
    content: Step4Form,
  },
];
