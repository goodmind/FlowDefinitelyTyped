declare module "reactstrap" {
  declare export interface CSSModule {
    [className: string]: string;
  }
  import type { default as Alert_ } from "./lib/Alert";

  declare export class Alert<T = {}> mixins Alert_<T> {}
  declare export { AlertProps } from "./lib/Alert";

  import type { default as Badge_ } from "./lib/Badge";

  declare export class Badge<T = {}> mixins Badge_<T> {}
  declare export { BadgeProps } from "./lib/Badge";

  import type { default as Breadcrumb_ } from "./lib/Breadcrumb";

  declare export class Breadcrumb<T = {}> mixins Breadcrumb_<T> {}
  declare export { BreadcrumbProps } from "./lib/Breadcrumb";

  import type { default as BreadcrumbItem_ } from "./lib/BreadcrumbItem";

  declare export class BreadcrumbItem<T = {}> mixins BreadcrumbItem_<T> {}
  declare export { BreadcrumbItemProps } from "./lib/BreadcrumbItem";

  import type { default as Button_ } from "./lib/Button";

  declare export class Button<T = {}> mixins Button_<T> {}
  declare export { ButtonProps } from "./lib/Button";

  import type { default as ButtonDropdown_ } from "./lib/ButtonDropdown";

  declare export class ButtonDropdown<T = {}> mixins ButtonDropdown_<T> {}
  declare export { ButtonDropdownProps } from "./lib/ButtonDropdown";

  import type { default as ButtonGroup_ } from "./lib/ButtonGroup";

  declare export class ButtonGroup<T = {}> mixins ButtonGroup_<T> {}
  declare export { ButtonGroupProps } from "./lib/ButtonGroup";

  import type { default as ButtonToolbar_ } from "./lib/ButtonToolbar";

  declare export class ButtonToolbar<T = {}> mixins ButtonToolbar_<T> {}
  declare export { ButtonToolbarProps } from "./lib/ButtonToolbar";

  import type { default as Card_ } from "./lib/Card";

  declare export class Card<T = {}> mixins Card_<T> {}
  declare export { CardProps } from "./lib/Card";

  import type { default as CardBody_ } from "./lib/CardBody";

  declare export class CardBody<T = {}> mixins CardBody_<T> {}
  declare export { CardBodyProps } from "./lib/CardBody";

  import type { default as CardColumns_ } from "./lib/CardColumns";

  declare export class CardColumns<T = {}> mixins CardColumns_<T> {}
  declare export { CardColumnsProps } from "./lib/CardColumns";

  import type { default as CardDeck_ } from "./lib/CardDeck";

  declare export class CardDeck<T = {}> mixins CardDeck_<T> {}
  declare export { CardDeckProps } from "./lib/CardDeck";

  import type { default as CardFooter_ } from "./lib/CardFooter";

  declare export class CardFooter<T = {}> mixins CardFooter_<T> {}
  declare export { CardFooterProps } from "./lib/CardFooter";

  import type { default as CardGroup_ } from "./lib/CardGroup";

  declare export class CardGroup<T = {}> mixins CardGroup_<T> {}
  declare export { CardGroupProps } from "./lib/CardGroup";

  import type { default as CardHeader_ } from "./lib/CardHeader";

  declare export class CardHeader<T = {}> mixins CardHeader_<T> {}
  declare export { CardHeaderProps } from "./lib/CardHeader";

  import type { default as CardImg_ } from "./lib/CardImg";

  declare export class CardImg<T = {}> mixins CardImg_<T> {}
  declare export { CardImgProps } from "./lib/CardImg";

  import type { default as CardImgOverlay_ } from "./lib/CardImgOverlay";

  declare export class CardImgOverlay<T = {}> mixins CardImgOverlay_<T> {}
  declare export { CardImgOverlayProps } from "./lib/CardImgOverlay";

  import type { default as CardLink_ } from "./lib/CardLink";

  declare export class CardLink<T = {}> mixins CardLink_<T> {}
  declare export { CardLinkProps } from "./lib/CardLink";

  import type { default as CardSubtitle_ } from "./lib/CardSubtitle";

  declare export class CardSubtitle<T = {}> mixins CardSubtitle_<T> {}
  declare export { CardSubtitleProps } from "./lib/CardSubtitle";

  import type { default as CardText_ } from "./lib/CardText";

  declare export class CardText<T = {}> mixins CardText_<T> {}
  declare export { CardTextProps } from "./lib/CardText";

  import type { default as CardTitle_ } from "./lib/CardTitle";

  declare export class CardTitle<T = {}> mixins CardTitle_<T> {}
  declare export { CardTitleProps } from "./lib/CardTitle";

  import type { default as Carousel_ } from "./lib/Carousel";

  declare export class Carousel<T = {}> mixins Carousel_<T> {}
  declare export { CarouselProps } from "./lib/Carousel";

  import type { default as CarouselItem_ } from "./lib/CarouselItem";

  declare export class CarouselItem<T = {}> mixins CarouselItem_<T> {}
  declare export { CarouselItemProps } from "./lib/CarouselItem";

  import type { default as CarouselControl_ } from "./lib/CarouselControl";

  declare export class CarouselControl<T = {}> mixins CarouselControl_<T> {}
  declare export { CarouselControlProps } from "./lib/CarouselControl";

  import type { default as CarouselIndicators_ } from "./lib/CarouselIndicators";

  declare export class CarouselIndicators<T = {}>
    mixins CarouselIndicators_<T> {}
  declare export { CarouselIndicatorsProps } from "./lib/CarouselIndicators";

  import type { default as CarouselCaption_ } from "./lib/CarouselCaption";

  declare export class CarouselCaption<T = {}> mixins CarouselCaption_<T> {}
  declare export { CarouselCaptionProps } from "./lib/CarouselCaption";

  import type { default as Col_ } from "./lib/Col";

  declare export class Col<T = {}> mixins Col_<T> {}
  declare export { ColProps } from "./lib/Col";

  import type { default as Collapse_ } from "./lib/Collapse";

  declare export class Collapse<T = {}> mixins Collapse_<T> {}
  declare export { CollapseProps } from "./lib/Collapse";

  import type { default as Container_ } from "./lib/Container";

  declare export class Container<T = {}> mixins Container_<T> {}
  declare export { ContainerProps } from "./lib/Container";

  import type { default as CustomInput_ } from "./lib/CustomInput";

  declare export class CustomInput<T = {}> mixins CustomInput_<T> {}
  declare export { CustomInputProps } from "./lib/CustomInput";

  import type { default as Dropdown_ } from "./lib/Dropdown";

  declare export class Dropdown<T = {}> mixins Dropdown_<T> {}
  declare export { DropdownProps } from "./lib/Dropdown";

  import type { default as DropdownItem_ } from "./lib/DropdownItem";

  declare export class DropdownItem<T = {}> mixins DropdownItem_<T> {}
  declare export { DropdownItemProps } from "./lib/DropdownItem";

  import type { default as DropdownMenu_ } from "./lib/DropdownMenu";

  declare export class DropdownMenu<T = {}> mixins DropdownMenu_<T> {}
  declare export { DropdownMenuProps } from "./lib/DropdownMenu";

  import type { default as DropdownToggle_ } from "./lib/DropdownToggle";

  declare export class DropdownToggle<T = {}> mixins DropdownToggle_<T> {}
  declare export { DropdownToggleProps } from "./lib/DropdownToggle";

  import type { default as Fade_ } from "./lib/Fade";

  declare export class Fade<T = {}> mixins Fade_<T> {}
  declare export { FadeProps } from "./lib/Fade";

  import type { default as Form_ } from "./lib/Form";

  declare export class Form<T = {}> mixins Form_<T> {}
  declare export { FormProps } from "./lib/Form";

  import type { default as FormFeedback_ } from "./lib/FormFeedback";

  declare export class FormFeedback<T = {}> mixins FormFeedback_<T> {}
  declare export { FormFeedbackProps } from "./lib/FormFeedback";

  import type { default as FormGroup_ } from "./lib/FormGroup";

  declare export class FormGroup<T = {}> mixins FormGroup_<T> {}
  declare export { FormGroupProps } from "./lib/FormGroup";

  import type { default as FormText_ } from "./lib/FormText";

  declare export class FormText<T = {}> mixins FormText_<T> {}
  declare export { FormTextProps } from "./lib/FormText";

  import type { default as Input_ } from "./lib/Input";

  declare export class Input<T = {}> mixins Input_<T> {}
  declare export { InputProps } from "./lib/Input";

  import type { default as InputGroup_ } from "./lib/InputGroup";

  declare export class InputGroup<T = {}> mixins InputGroup_<T> {}
  declare export { InputGroupProps } from "./lib/InputGroup";

  import type { default as InputGroupAddon_ } from "./lib/InputGroupAddon";

  declare export class InputGroupAddon<T = {}> mixins InputGroupAddon_<T> {}
  declare export { InputGroupAddonProps } from "./lib/InputGroupAddon";

  import type { default as InputGroupButtonDropdown_ } from "./lib/InputGroupButtonDropdown";

  declare export class InputGroupButtonDropdown<T = {}>
    mixins InputGroupButtonDropdown_<T> {}
  declare export {
    InputGroupButtonDropdownProps
  } from "./lib/InputGroupButtonDropdown";

  import type { default as InputGroupText_ } from "./lib/InputGroupText";

  declare export class InputGroupText<T = {}> mixins InputGroupText_<T> {}
  declare export { InputGroupTextProps } from "./lib/InputGroupText";

  import type { default as Jumbotron_ } from "./lib/Jumbotron";

  declare export class Jumbotron<T = {}> mixins Jumbotron_<T> {}
  declare export { JumbotronProps } from "./lib/Jumbotron";

  import type { default as Label_ } from "./lib/Label";

  declare export class Label<T = {}> mixins Label_<T> {}
  declare export { LabelProps } from "./lib/Label";

  import type { default as ListGroup_ } from "./lib/ListGroup";

  declare export class ListGroup<T = {}> mixins ListGroup_<T> {}
  declare export { ListGroupProps } from "./lib/ListGroup";

  import type { default as ListGroupItem_ } from "./lib/ListGroupItem";

  declare export class ListGroupItem<T = {}> mixins ListGroupItem_<T> {}
  declare export { ListGroupItemProps } from "./lib/ListGroupItem";

  import type { default as ListGroupItemHeading_ } from "./lib/ListGroupItemHeading";

  declare export class ListGroupItemHeading<T = {}>
    mixins ListGroupItemHeading_<T> {}
  declare export {
    ListGroupItemHeadingProps
  } from "./lib/ListGroupItemHeading";

  import type { default as ListGroupItemText_ } from "./lib/ListGroupItemText";

  declare export class ListGroupItemText<T = {}> mixins ListGroupItemText_<T> {}
  declare export { ListGroupItemTextProps } from "./lib/ListGroupItemText";

  import type { default as Media_ } from "./lib/Media";

  declare export class Media<T = {}> mixins Media_<T> {}
  declare export { MediaProps } from "./lib/Media";

  import type { default as Modal_ } from "./lib/Modal";

  declare export class Modal<T = {}> mixins Modal_<T> {}
  declare export { ModalProps } from "./lib/Modal";

  import type { default as ModalBody_ } from "./lib/ModalBody";

  declare export class ModalBody<T = {}> mixins ModalBody_<T> {}
  declare export { ModalBodyProps } from "./lib/ModalBody";

  import type { default as ModalFooter_ } from "./lib/ModalFooter";

  declare export class ModalFooter<T = {}> mixins ModalFooter_<T> {}
  declare export { ModalFooterProps } from "./lib/ModalFooter";

  import type { default as ModalHeader_ } from "./lib/ModalHeader";

  declare export class ModalHeader<T = {}> mixins ModalHeader_<T> {}
  declare export { ModalHeaderProps } from "./lib/ModalHeader";

  import type { default as Nav_ } from "./lib/Nav";

  declare export class Nav<T = {}> mixins Nav_<T> {}
  declare export { NavProps } from "./lib/Nav";

  import type { default as Navbar_ } from "./lib/Navbar";

  declare export class Navbar<T = {}> mixins Navbar_<T> {}
  declare export { NavbarProps } from "./lib/Navbar";

  import type { default as NavbarBrand_ } from "./lib/NavbarBrand";

  declare export class NavbarBrand<T = {}> mixins NavbarBrand_<T> {}
  declare export { NavbarBrandProps } from "./lib/NavbarBrand";

  import type { default as NavbarToggler_ } from "./lib/NavbarToggler";

  declare export class NavbarToggler<T = {}> mixins NavbarToggler_<T> {}
  declare export { NavbarTogglerProps } from "./lib/NavbarToggler";

  import type { default as NavItem_ } from "./lib/NavItem";

  declare export class NavItem<T = {}> mixins NavItem_<T> {}
  declare export { NavItemProps } from "./lib/NavItem";

  import type { default as NavLink_ } from "./lib/NavLink";

  declare export class NavLink<T = {}> mixins NavLink_<T> {}
  declare export { NavLinkProps } from "./lib/NavLink";

  import type { default as Pagination_ } from "./lib/Pagination";

  declare export class Pagination<T = {}> mixins Pagination_<T> {}
  declare export { PaginationProps } from "./lib/Pagination";

  import type { default as PaginationItem_ } from "./lib/PaginationItem";

  declare export class PaginationItem<T = {}> mixins PaginationItem_<T> {}
  declare export { PaginationItemProps } from "./lib/PaginationItem";

  import type { default as PaginationLink_ } from "./lib/PaginationLink";

  declare export class PaginationLink<T = {}> mixins PaginationLink_<T> {}
  declare export { PaginationLinkProps } from "./lib/PaginationLink";

  import type { default as Popover_ } from "./lib/Popover";

  declare export class Popover<T = {}> mixins Popover_<T> {}
  declare export { PopoverProps } from "./lib/Popover";

  import type { default as PopoverBody_ } from "./lib/PopoverBody";

  declare export class PopoverBody<T = {}> mixins PopoverBody_<T> {}
  declare export { PopoverBodyProps } from "./lib/PopoverBody";

  import type { default as PopoverHeader_ } from "./lib/PopoverHeader";

  declare export class PopoverHeader<T = {}> mixins PopoverHeader_<T> {}
  declare export { PopoverHeaderProps } from "./lib/PopoverHeader";

  import type { default as Progress_ } from "./lib/Progress";

  declare export class Progress<T = {}> mixins Progress_<T> {}
  declare export { ProgressProps } from "./lib/Progress";

  import type { default as Row_ } from "./lib/Row";

  declare export class Row<T = {}> mixins Row_<T> {}
  declare export { RowProps } from "./lib/Row";

  import type { default as Spinner_ } from "./lib/Spinner";

  declare export class Spinner<T = {}> mixins Spinner_<T> {}
  declare export { SpinnerProps } from "./lib/Spinner";

  import type { default as TabContent_ } from "./lib/TabContent";

  declare export class TabContent<T = {}> mixins TabContent_<T> {}
  declare export { TabContentProps } from "./lib/TabContent";

  import type { default as Table_ } from "./lib/Table";

  declare export class Table<T = {}> mixins Table_<T> {}
  declare export { TableProps } from "./lib/Table";

  import type { default as TabPane_ } from "./lib/TabPane";

  declare export class TabPane<T = {}> mixins TabPane_<T> {}
  declare export { TabPaneProps } from "./lib/TabPane";

  import type { default as Tag_ } from "./lib/Tag";

  declare export class Tag<T = {}> mixins Tag_<T> {}
  declare export { TagProps } from "./lib/Tag";

  import type { default as Tooltip_ } from "./lib/Tooltip";

  declare export class Tooltip<T = {}> mixins Tooltip_<T> {}
  declare export { TooltipProps } from "./lib/Tooltip";

  import type {
    UncontrolledAlert as UncontrolledAlert_,
    UncontrolledButtonDropdown as UncontrolledButtonDropdown_,
    UncontrolledDropdown as UncontrolledDropdown_,
    UncontrolledTooltip as UncontrolledTooltip_,
    UncontrolledCollapse as UncontrolledCollapse_,
    UncontrolledCarousel as UncontrolledCarousel_,
    UncontrolledPopover as UncontrolledPopover_
  } from "./lib/Uncontrolled";

  declare export class UncontrolledAlert<T = {}> mixins UncontrolledAlert_<T> {}
  declare export class UncontrolledButtonDropdown<T = {}>
    mixins UncontrolledButtonDropdown_<T> {}
  declare export class UncontrolledDropdown<T = {}>
    mixins UncontrolledDropdown_<T> {}
  declare export class UncontrolledTooltip<T = {}>
    mixins UncontrolledTooltip_<T> {}
  declare export class UncontrolledCollapse<T = {}>
    mixins UncontrolledCollapse_<T> {}
  declare export class UncontrolledCarousel<T = {}>
    mixins UncontrolledCarousel_<T> {}
  declare export class UncontrolledPopover<T = {}>
    mixins UncontrolledPopover_<T> {}
  declare export {
    UncontrolledButtonDropdownProps,
    UncontrolledAlertProps,
    UncontrolledDropdownProps,
    UncontrolledTooltipProps,
    UncontrolledCollapseProps,
    UncontrolledCarouselProps,
    UncontrolledPopoverProps
  } from "./lib/Uncontrolled";
}
