import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionListComponent } from '@caravancoop/ui-kit/accordion-list';
import { AccordionItem } from '@caravancoop/ui-kit/interface/accordionItem';
import { FeatherIconsModule } from '../../shared/feather-icons/feather-icons.module';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, AccordionListComponent, FeatherIconsModule],
  templateUrl: './faq.component.html',
  styleUrls: []
})
export class FaqComponent {
  qaList: Array<AccordionItem> = [
    {
      id: "1",
      title: "How many team members can I invite?",
      content: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
      isDisabled: false,
      isOpen: false
    },
    {
      id: "2",
      title: "What is the maximum file upload size?",
      content: "No more than 2GB. All files in your account must fit your allotted storage space.",
      isDisabled: true,
      isOpen: false
    },
    {
      id: "3",
      title: "Why have the nutrition values changed?",
      content: `We want to ensure that we provide our customers with the most accurate nutritional composition of our products. This is why we regularly carry out analysis of our ingredients to check the data that we provide.`,
      isDisabled: false,
      isOpen: false
    },
    {
      id: "4",
      title: "Why has the way that the nutritional information is presented on the Kiosk, App and Website changed, to include nutrition information for each ingredient?",
      content: `We have provided nutritional information to our customers for over 30 years and were the first large company in our sector to display calorie information on our menu boards.
      New calorie labelling legislation from April 2022 means that it will become mandatory to provide calorie information at all point of choice customer touchpoints.
      <br/>
      We have taken the decision to implement this new legislation from the 16 March 2022 as part of our promotional change. The main change from the 16 March 2022 is that we will be providing our customers with additional information when you customise a product- for example, we will be providing additional nutritional information for when cheese or bacon are either added or removed.`,
      isDisabled: false,
      isOpen: false
    },
    {
      id: "5",
      title: "Why are McDonald's substituting sunflower oil in some recipes?",
      content: `The conflict in Ukraine has affected supplies of sunflower oil. To ensure we can continue to offer our full menu, we have been working closely with our suppliers to substitute sunflower oil.`,
      isDisabled: false,
      isOpen: true
    },
  ]
}
