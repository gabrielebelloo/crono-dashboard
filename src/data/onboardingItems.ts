import type { OnboardingItemProps } from "../components/ui/OnboardingItem";
import integrationsSetup from "../assets/integrations-setup.png";
import addNewContact from "../assets/add-new-contact.png";
import createFirstSequence from "../assets/create-your-first-sequence.png";
import addContactsToSequence from "../assets/add-contacts-to-sequence.png";
import runFirstTask from "../assets/run-your-first-task.png";

export const onboardingItems: OnboardingItemProps[] = [
  {
    icon: integrationsSetup,
    label: "Integrations Setup",
    duration: "5 min",
  },
  {
    icon: addNewContact,
    label: "Add new Contact",
    duration: "5 min",
  },
  {
    icon: createFirstSequence,
    label: "Create your first sequence",
    duration: "10 min",
  },
  {
    icon: addContactsToSequence,
    label: "Add contacts to sequence",
    duration: "5 min",
  },
  {
    icon: runFirstTask,
    label: "Run your first task",
    duration: "10 min",
  },
];
