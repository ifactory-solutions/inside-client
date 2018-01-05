const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getApplicantNameDecorator(decorator) {
  return decorator('applicant_name', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}
function getInterViewTypeDecorator(decorator) {
  return decorator('interview_type', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}
function getInterviewStatusDecorator(decorator) {
  return decorator('interview_status', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}
function getDueDateDecorator(decorator) {
  return decorator('due_date', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}
function getInterviewerDecorator(decorator) {
  return decorator('interviewer', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}
function getScoreDecorator(decorator) {
  return decorator('scores', {
    rules: [{ required: false, message: REQUIRED_FIELD_MSG }],
  });
}

export function getDecoratorManager(decorator) {
  return {
    applicantNameDecorator: getApplicantNameDecorator(decorator),
    interViewTypeDecorator: getInterViewTypeDecorator(decorator),
    interviewStatusDecorator: getInterviewStatusDecorator(decorator),
    dueDateDecorator: getDueDateDecorator(decorator),
    interviewerDecorator: getInterviewerDecorator(decorator),
    scoreDecorator: getScoreDecorator(decorator),
  };
}
