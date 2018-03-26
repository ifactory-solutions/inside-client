import { getRequiredDecorator } from 'components/ui/Forms';

export function getDecoratorManager(decorator) {
  return {
    nameDecorator: getRequiredDecorator(decorator, 'name'),
  };
}
