export default {

  // Buttons define the various kinds of buttons for the viewer
  Buttons: {
    editToolButton: 'editToolButton',
    viewControlsButton: 'viewControlsButton',
    freeHandToolButton: 'freeHandToolButton',
    highlightToolButton: 'highlightToolButton',
    underlineToolButton: 'underlineToolButton',
    squigglyToolButton: 'squigglyToolButton',
    strikeoutToolButton: 'strikeoutToolButton',
    rectangleToolButton: 'rectangleToolButton',
    ellipseToolButton: 'ellipseToolButton',
    lineToolButton: 'lineToolButton',
    arrowToolButton: 'arrowToolButton',
    polylineToolButton: 'polylineToolButton',
    polygonToolButton: 'polygonToolButton',
    cloudToolButton: 'cloudToolButton',
    signatureToolButton: 'signatureToolButton',
    freeTextToolButton: 'freeTextToolButton',
    stickyToolButton: 'stickyToolButton',
    calloutToolButton: 'calloutToolButton',
    stampToolButton: 'stampToolButton',
    toolsButton: 'toolsButton',
    searchButton: 'searchButton',
    shareButton: 'shareButton',
    editPagesButton: 'editPagesButton',
    printButton: 'printButton',
    closeButton: 'closeButton',
    saveCopyButton: 'saveCopyButton',
    formToolsButton: 'formToolsButton',
    fillSignToolsButton: 'fillSignToolsButton',
    moreItemsButton: 'moreItemsButton',
    thumbnailsButton: 'thumbnailsButton',
    listsButton: 'listsButton',
    thumbnailSlider: 'thumbnailSlider',
    outlineListButton: 'outlineListButton',
    annotationListButton: 'annotationListButton',
    userBookmarkListButton: 'userBookmarkListButton',
    reflowButton: 'reflowButton',
    editMenuButton: 'editMenuButton',
    cropPageButton: 'cropPageButton',
    undo: 'undo',
    redo: 'redo'
  },

  // Tools define the various kinds of tools for the viewer
  Tools: {
    annotationEdit: 'AnnotationEdit',
    textSelect: 'TextSelect',
    pan: 'Pan',
    annotationEraserTool: 'AnnotationEraserTool',
    annotationCreateSticky: 'AnnotationCreateSticky',
    annotationCreateFreeHand: 'AnnotationCreateFreeHand',
    annotationCreateTextHighlight: 'AnnotationCreateTextHighlight',
    annotationCreateTextUnderline: 'AnnotationCreateTextUnderline',
    annotationCreateTextSquiggly: 'AnnotationCreateTextSquiggly',
    annotationCreateTextStrikeout: 'AnnotationCreateTextStrikeout',
    annotationCreateFreeText: 'AnnotationCreateFreeText',
    annotationCreateCallout: 'AnnotationCreateCallout',
    annotationCreateSignature: 'AnnotationCreateSignature',
    annotationCreateLine: 'AnnotationCreateLine',
    annotationCreateArrow: 'AnnotationCreateArrow',
    annotationCreatePolyline: 'AnnotationCreatePolyline',
    annotationCreateStamp: 'AnnotationCreateStamp',
    annotationCreateRubberStamp: 'AnnotationCreateRubberStamp',
    annotationCreateRectangle: 'AnnotationCreateRectangle',
    annotationCreateEllipse: 'AnnotationCreateEllipse',
    annotationCreatePolygon: 'AnnotationCreatePolygon',
    annotationCreatePolygonCloud: 'AnnotationCreatePolygonCloud',
    annotationCreateDistanceMeasurement: 'AnnotationCreateDistanceMeasurement',
    annotationCreatePerimeterMeasurement: 'AnnotationCreatePerimeterMeasurement',
    annotationCreateAreaMeasurement: 'AnnotationCreateAreaMeasurement',
    annotationCreateFileAttachment: 'AnnotationCreateFileAttachment',
    annotationCreateSound: 'AnnotationCreateSound',
    annotationCreateRedaction: 'AnnotationCreateRedaction',
    annotationCreateLink: 'AnnotationCreateLink',
    annotationCreateRedactionText: 'AnnotationCreateRedactionText',
    annotationCreateLinkText: 'AnnotationCreateLinkText',
    annotationCreateFreeHighlighter: 'AnnotationCreateFreeHighlighter',
    formCreateTextField: 'FormCreateTextField',
    formCreateCheckboxField: 'FormCreateCheckboxField',
    formCreateSignatureField: 'FormCreateSignatureField',
    formCreateRadioField: 'FormCreateRadioField',
    formCreateComboBoxField: 'FormCreateComboBoxField',
    formCreateListBoxField: 'FormCreateListBoxField',

    // iOS only.
    pencilKitDrawing: 'PencilKitDrawing',
  },

  // FitMode define how a page should fit relative to the viewer, alternatively, the default zoom level
  FitMode: {
    FitPage: 'FitPage',
    FitWidth: 'FitWidth',
    FitHeight: 'FitHeight',
    Zoom: 'Zoom',
  },

  // LayoutMode defines the layout mode of the viewer
  LayoutMode: {
    Single: 'Single',
    Continuous: 'Continuous',
    Facing: 'Facing',
    FacingContinuous: 'FacingContinuous',
    FacingCover: 'FacingCover',
    FacingCoverContinuous: 'FacingCoverContinuous',
  },

  // FieldFlags define the property flags for a form field
  FieldFlags: {
    ReadOnly: 0,
    Required: 1,
  },

  // AnnotationMenu defines the menu items when an annotation is selected
  AnnotationMenu: {
    style: 'style',
    note: 'note',
    copy: 'copy',
    delete: 'delete',
    flatten: 'flatten',
    editText: 'editText',
    editInk: 'editInk',
    search: 'search',
    share: 'share',
    markupType: 'markupType',
    read: 'read',
    screenCapture: 'screenCapture',
    playSound: 'playSound',
    openAttachment: 'openAttachment',
    calibrate: 'calibrate',
  },

  // LongPressMenu defines the menu items when a long press on empty space or text occurs
  LongPressMenu: {
    copy: 'copy',
    search: 'search',
    share: 'share',
    read: 'read',
  },
  
  // Actions define potentially overridable action to the viewer
  Actions: {
    linkPress: 'linkPress',
    stickyNoteShowPopUp: 'stickyNoteShowPopUp',
  },

  // AnnotationFlags define the flags for any annotation in the document
  AnnotationFlags: {
    hidden: "hidden",
    invisible: "invisible",
    locked: "locked",
    lockedContents: "lockedContents",
    noRotate: "noRotate",
    noView: "noView",
    noZoom: "noZoom",
    print: "print",
    readOnly: "readOnly",
    toggleNoView: "toggleNoView"
  },

  // DefaultToolbars define a set of pre-designed toolbars for easier customization
  DefaultToolbars: {
    View: "PDFTron_View",
    Annotate: "PDFTron_Annotate",
    Draw: "PDFTron_Draw",
    Insert: "PDFTron_Insert",
    FillAndSign: "PDFTron_Fill_and_Sign",
    PrepareForm: "PDFTron_Prepare_Form",
    Measure: "PDFTron_Measure",
    Pens: "PDFTron_Pens",
    Redaction: "PDFTron_Redact",
    Favorite: "PDFTron_Favorite"
  },

  // ToolbarIcons define default toolbar icons for use for potential custom toolbars
  ToolbarIcons: {
    View: "PDFTron_View",
    Annotate: "PDFTron_Annotate",
    Draw: "PDFTron_Draw",
    Insert: "PDFTron_Insert",
    FillAndSign: "PDFTron_Fill_and_Sign",
    PrepareForm: "PDFTron_Prepare_Form",
    Measure: "PDFTron_Measure",
    Pens: "PDFTron_Pens",
    Redaction: "PDFTron_Redact",
    Favorite: "PDFTron_Favorite"
  },

  // CustomToolbarKey defines the necessary keys for a custom toolbar
  CustomToolbarKey: {
    Id: "id",
    Name: "name",
    Icon: "icon",
    Items: "items"
  },

  // ThumbnailFilterMode defines filter modes in the thumbnails browser
  ThumbnailFilterMode: {
    Annotated: "annotated",
    Bookmarked: "bookmarked",
  },
};
