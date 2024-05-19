# CHANGELOG
# 2.0.3 - 2024-1-30
- Cleanup: deleted all the sass and test files
- Trivia: changed the dialog negative action button to text style

# 2.0.2 - 2023-11-15
- Bump ngx-slider-v2 dep to match angular17

# 2.0.1 - 2023-11-15
- Include ngx-slider-v2 to peer dependency
- Bugfix: initially check the radio and checkbox if the parent form checks

# 2.0.0 - 2023-11-14
 - Bump to Angular 17
 - Integrate Tailwind
 - Deleted all sass styling
 - Deleted modules (button, form field, sidenav, card), all components become standalone
 - Refactor slider and range with ngx-slider lib
 - Deleted some directives and replaced with property bindings, such as car-solid-btn became appearance = 'solid'
 - Improve: implement checkbox and radio to be native with ControlValueAccessor

# 1.7.6 - 2023-10-19
- Bugfix: Fix the button with icon font size not scaling by btn size

# 1.7.5 - 2023-10-4
- Improve: visual improvements on car-item, car-card
- Improve: Allow spacing sm, md, lg for car-accordion-item
- Delete: car-list component is removed, the same behavior can be achieved by looping car-item

# 1.7.4 - 2023-9-29
- Bugfix: Fix the dialog unable to open after closing by clicking the backdrop

# 1.7.3 - 2023-9-28
- Improve: Allow the dialog to configure button colors in case the primary action is positive (e.g.Confirm -> color success) or negative (e.g,Terminate -> color error)
- Bugfix: Match dialog bg with dark theme
- Bugfix: Fix the dialog subscription multiple value emission upon opening

# 1.7.2 - 2023-9-26
- Bugfix: remove radio min-width

# 1.7.1 - 2023-9-26
- Improve: button group stacking behavior, stack only on mobile screen
- Improve: Uniform form font-size to body-sm (14px)
- Bugfix: Fix car-select submitted data from label to be value
- Bugfix: Fix radio and checkbox to be able to click itself not only the label

# 1.7.0 - 2023-9-15
- Improve: Added dark theme, optional to import
- Improve: Simplified grey tones, remove warmgrey coolgrey, leave only neutral (original coolgrey hex)
- Improve: Adjusted button group position alignement
- Chores: Renamed tooltip directive, added text tooltip style

# 1.6.3 - 2023-9-6
- Changed accordionItem type id from number to string
- Moved button-group component to button module
- Badge appearance small adjustment

# 1.6.2 - 2023-8-30
- Included tooltip in the form module to be able to show tooltip icon inside input field
- Added tooltip position (left, right, above, below)

# 1.6.1 - 2023-8-29
- Added tooltip directive and component
- Changed checkbox style to tick mark
- Small adjustment for toggle

# 1.5.2 - 2023-8-17
- Added number pipe to car-progress (no decimal for percentage value)
- Bugfix: reset range and slider from a parent reactve form (added form service)

# 1.5.1 - 2023-8-15
- Added disabled state to components slider and range
- unify prop naming, disabled -> isDisabled

# 1.5.0 - 2023-8-14
- Added range component for two value choice in a slider
- Unform range and slider to have the same appearance

# 1.4.1 - 2023-8-9
- Added prop optionLabels to car-select to allow passing array of objects containing value and label
- Gave a fixed height and scrollbar to car-select
- Small styling changes

# 1.4.0 - 2023-8-8
- Added slider component with native form control.
- Implemented ControlValueAccessor to the car-select to become a native form control element.

# 1.3.1 - 2023-8-1
- Small fix: toggle appearance, better consistent naming ( gauge progress -> value, color warn -> error)

# 1.3.0 - 2023-7-26
- Removed radio checkbox color variables, only grey border with checked blue
- Added pattern to format the date input

# 1.2.0 - 2023-7-21
- Allow the avatar to have a badge in the corner
- Added title to accordion list
- Linear progress bar small fix

# 1.1.0- 2023-7-12
- Added component car-select (a customized select option panel)

# 1.0.0 - 2023-7-07
- Version stablized after bumping to Angular v16
- Improved accordion to allow showing id (appear as an ordered list)

# 0.0.10 - 2023-7-05
- Build the lib

# 0.0.9 - 2023-7-05
- Fix some lint errors

# 0.0.8 - 2023-7-05
- Bump angular to v16

# 0.0.7 - 2023-7-05
- Use correct package to be deployed

# 0.0.6- 2023-7-05
- Bump angular to v16

# 0.0.5 - 2023-6-27
- Added layout: equal column
- Sidenav chores: include font styles within nav
- Improved accordion: possible to open by default, add ng-content, add smooth transition

# 0.0.4 - 2023-6-20
- Added components: gauge, rating
- Added animation to linear progress and gauge

# 0.0.3 - 2023-06-15
- Added buttonType submit, made it possible to bind to ngSubmit
- Improved form-field error case visual hint (input red border)
- Added attribut car-error for the form-field error msg hint

# 0.0.2 - 2023-06-12
- Added layout sidenav, flex
- Added components: linear progress bar, list
- Allow choosing open/close icons (from FeatherIcon) to customize the accordion look
- Added shadow for fab buttons

# 0.0.1 - 2023-06-01
- Implemented multiple entrypoints for each component or module
- Created a range of most common components and ui templates
