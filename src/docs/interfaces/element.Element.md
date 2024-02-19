[Documentation](../README.md) / [Modules](../modules.md) / [element](../modules/element.md) / Element

# Interface: Element

[element](../modules/element.md).Element

Element is the most general base class from which all objects in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element)

## Hierarchy

- `Node`

- `ARIAMixin`

- `Animatable`

- `ChildNode`

- `InnerHTML`

- `NonDocumentTypeChildNode`

- `ParentNode`

- `Slottable`

  ↳ **`Element`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](element.Element.md#attribute_node)
- [CDATA\_SECTION\_NODE](element.Element.md#cdata_section_node)
- [COMMENT\_NODE](element.Element.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](element.Element.md#document_fragment_node)
- [DOCUMENT\_NODE](element.Element.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](element.Element.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](element.Element.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](element.Element.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](element.Element.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](element.Element.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](element.Element.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](element.Element.md#document_type_node)
- [ELEMENT\_NODE](element.Element.md#element_node)
- [ENTITY\_NODE](element.Element.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](element.Element.md#entity_reference_node)
- [NOTATION\_NODE](element.Element.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](element.Element.md#processing_instruction_node)
- [TEXT\_NODE](element.Element.md#text_node)
- [ariaAtomic](element.Element.md#ariaatomic)
- [ariaAutoComplete](element.Element.md#ariaautocomplete)
- [ariaBusy](element.Element.md#ariabusy)
- [ariaChecked](element.Element.md#ariachecked)
- [ariaColCount](element.Element.md#ariacolcount)
- [ariaColIndex](element.Element.md#ariacolindex)
- [ariaColSpan](element.Element.md#ariacolspan)
- [ariaCurrent](element.Element.md#ariacurrent)
- [ariaDisabled](element.Element.md#ariadisabled)
- [ariaExpanded](element.Element.md#ariaexpanded)
- [ariaHasPopup](element.Element.md#ariahaspopup)
- [ariaHidden](element.Element.md#ariahidden)
- [ariaInvalid](element.Element.md#ariainvalid)
- [ariaKeyShortcuts](element.Element.md#ariakeyshortcuts)
- [ariaLabel](element.Element.md#arialabel)
- [ariaLevel](element.Element.md#arialevel)
- [ariaLive](element.Element.md#arialive)
- [ariaModal](element.Element.md#ariamodal)
- [ariaMultiLine](element.Element.md#ariamultiline)
- [ariaMultiSelectable](element.Element.md#ariamultiselectable)
- [ariaOrientation](element.Element.md#ariaorientation)
- [ariaPlaceholder](element.Element.md#ariaplaceholder)
- [ariaPosInSet](element.Element.md#ariaposinset)
- [ariaPressed](element.Element.md#ariapressed)
- [ariaReadOnly](element.Element.md#ariareadonly)
- [ariaRequired](element.Element.md#ariarequired)
- [ariaRoleDescription](element.Element.md#ariaroledescription)
- [ariaRowCount](element.Element.md#ariarowcount)
- [ariaRowIndex](element.Element.md#ariarowindex)
- [ariaRowSpan](element.Element.md#ariarowspan)
- [ariaSelected](element.Element.md#ariaselected)
- [ariaSetSize](element.Element.md#ariasetsize)
- [ariaSort](element.Element.md#ariasort)
- [ariaValueMax](element.Element.md#ariavaluemax)
- [ariaValueMin](element.Element.md#ariavaluemin)
- [ariaValueNow](element.Element.md#ariavaluenow)
- [ariaValueText](element.Element.md#ariavaluetext)
- [arkElement](element.Element.md#arkelement)
- [assignedSlot](element.Element.md#assignedslot)
- [attributes](element.Element.md#attributes)
- [avRecordElement](element.Element.md#avrecordelement)
- [baseURI](element.Element.md#baseuri)
- [calendarElement](element.Element.md#calendarelement)
- [childElementCount](element.Element.md#childelementcount)
- [childNodes](element.Element.md#childnodes)
- [children](element.Element.md#children)
- [classList](element.Element.md#classlist)
- [className](element.Element.md#classname)
- [clientHeight](element.Element.md#clientheight)
- [clientLeft](element.Element.md#clientleft)
- [clientTop](element.Element.md#clienttop)
- [clientWidth](element.Element.md#clientwidth)
- [elementId](element.Element.md#elementid)
- [elementType](element.Element.md#elementtype)
- [extBufForUI](element.Element.md#extbufforui)
- [faceElement](element.Element.md#faceelement)
- [fileElement](element.Element.md#fileelement)
- [firstChild](element.Element.md#firstchild)
- [firstElementChild](element.Element.md#firstelementchild)
- [giphyElement](element.Element.md#giphyelement)
- [grayTipElement](element.Element.md#graytipelement)
- [id](element.Element.md#id)
- [inlineKeyboardElement](element.Element.md#inlinekeyboardelement)
- [innerHTML](element.Element.md#innerhtml)
- [isConnected](element.Element.md#isconnected)
- [lastChild](element.Element.md#lastchild)
- [lastElementChild](element.Element.md#lastelementchild)
- [liveGiftElement](element.Element.md#livegiftelement)
- [localName](element.Element.md#localname)
- [markdownElement](element.Element.md#markdownelement)
- [marketFaceElement](element.Element.md#marketfaceelement)
- [multiForwardMsgElement](element.Element.md#multiforwardmsgelement)
- [namespaceURI](element.Element.md#namespaceuri)
- [nextElementSibling](element.Element.md#nextelementsibling)
- [nextSibling](element.Element.md#nextsibling)
- [nodeName](element.Element.md#nodename)
- [nodeType](element.Element.md#nodetype)
- [nodeValue](element.Element.md#nodevalue)
- [onfullscreenchange](element.Element.md#onfullscreenchange)
- [onfullscreenerror](element.Element.md#onfullscreenerror)
- [outerHTML](element.Element.md#outerhtml)
- [ownerDocument](element.Element.md#ownerdocument)
- [parentElement](element.Element.md#parentelement)
- [parentNode](element.Element.md#parentnode)
- [part](element.Element.md#part)
- [picElement](element.Element.md#picelement)
- [prefix](element.Element.md#prefix)
- [previousElementSibling](element.Element.md#previouselementsibling)
- [previousSibling](element.Element.md#previoussibling)
- [pttElement](element.Element.md#pttelement)
- [replyElement](element.Element.md#replyelement)
- [role](element.Element.md#role)
- [scrollHeight](element.Element.md#scrollheight)
- [scrollLeft](element.Element.md#scrollleft)
- [scrollTop](element.Element.md#scrolltop)
- [scrollWidth](element.Element.md#scrollwidth)
- [shadowRoot](element.Element.md#shadowroot)
- [slot](element.Element.md#slot)
- [structLongMsgElement](element.Element.md#structlongmsgelement)
- [tagName](element.Element.md#tagname)
- [textContent](element.Element.md#textcontent)
- [textElement](element.Element.md#textelement)
- [textGiftElement](element.Element.md#textgiftelement)
- [videoElement](element.Element.md#videoelement)
- [walletElement](element.Element.md#walletelement)
- [yoloGameResultElement](element.Element.md#yologameresultelement)

### Methods

- [addEventListener](element.Element.md#addeventlistener)
- [after](element.Element.md#after)
- [animate](element.Element.md#animate)
- [append](element.Element.md#append)
- [appendChild](element.Element.md#appendchild)
- [attachShadow](element.Element.md#attachshadow)
- [before](element.Element.md#before)
- [checkVisibility](element.Element.md#checkvisibility)
- [cloneNode](element.Element.md#clonenode)
- [closest](element.Element.md#closest)
- [compareDocumentPosition](element.Element.md#comparedocumentposition)
- [computedStyleMap](element.Element.md#computedstylemap)
- [contains](element.Element.md#contains)
- [dispatchEvent](element.Element.md#dispatchevent)
- [getAnimations](element.Element.md#getanimations)
- [getAttribute](element.Element.md#getattribute)
- [getAttributeNS](element.Element.md#getattributens)
- [getAttributeNames](element.Element.md#getattributenames)
- [getAttributeNode](element.Element.md#getattributenode)
- [getAttributeNodeNS](element.Element.md#getattributenodens)
- [getBoundingClientRect](element.Element.md#getboundingclientrect)
- [getClientRects](element.Element.md#getclientrects)
- [getElementsByClassName](element.Element.md#getelementsbyclassname)
- [getElementsByTagName](element.Element.md#getelementsbytagname)
- [getElementsByTagNameNS](element.Element.md#getelementsbytagnamens)
- [getRootNode](element.Element.md#getrootnode)
- [hasAttribute](element.Element.md#hasattribute)
- [hasAttributeNS](element.Element.md#hasattributens)
- [hasAttributes](element.Element.md#hasattributes)
- [hasChildNodes](element.Element.md#haschildnodes)
- [hasPointerCapture](element.Element.md#haspointercapture)
- [insertAdjacentElement](element.Element.md#insertadjacentelement)
- [insertAdjacentHTML](element.Element.md#insertadjacenthtml)
- [insertAdjacentText](element.Element.md#insertadjacenttext)
- [insertBefore](element.Element.md#insertbefore)
- [isDefaultNamespace](element.Element.md#isdefaultnamespace)
- [isEqualNode](element.Element.md#isequalnode)
- [isSameNode](element.Element.md#issamenode)
- [lookupNamespaceURI](element.Element.md#lookupnamespaceuri)
- [lookupPrefix](element.Element.md#lookupprefix)
- [matches](element.Element.md#matches)
- [normalize](element.Element.md#normalize)
- [prepend](element.Element.md#prepend)
- [querySelector](element.Element.md#queryselector)
- [querySelectorAll](element.Element.md#queryselectorall)
- [releasePointerCapture](element.Element.md#releasepointercapture)
- [remove](element.Element.md#remove)
- [removeAttribute](element.Element.md#removeattribute)
- [removeAttributeNS](element.Element.md#removeattributens)
- [removeAttributeNode](element.Element.md#removeattributenode)
- [removeChild](element.Element.md#removechild)
- [removeEventListener](element.Element.md#removeeventlistener)
- [replaceChild](element.Element.md#replacechild)
- [replaceChildren](element.Element.md#replacechildren)
- [replaceWith](element.Element.md#replacewith)
- [requestFullscreen](element.Element.md#requestfullscreen)
- [requestPointerLock](element.Element.md#requestpointerlock)
- [scroll](element.Element.md#scroll)
- [scrollBy](element.Element.md#scrollby)
- [scrollIntoView](element.Element.md#scrollintoview)
- [scrollTo](element.Element.md#scrollto)
- [setAttribute](element.Element.md#setattribute)
- [setAttributeNS](element.Element.md#setattributens)
- [setAttributeNode](element.Element.md#setattributenode)
- [setAttributeNodeNS](element.Element.md#setattributenodens)
- [setPointerCapture](element.Element.md#setpointercapture)
- [toggleAttribute](element.Element.md#toggleattribute)
- [webkitMatchesSelector](element.Element.md#webkitmatchesselector)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: ``2``

#### Inherited from

Node.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16205

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: ``4``

node is a CDATASection node.

#### Inherited from

Node.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16209

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: ``8``

node is a Comment node.

#### Inherited from

Node.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16215

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: ``11``

node is a DocumentFragment node.

#### Inherited from

Node.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16221

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: ``9``

node is a document.

#### Inherited from

Node.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16217

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: ``16``

Set when other is a descendant of node.

#### Inherited from

Node.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16232

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: ``8``

Set when other is an ancestor of node.

#### Inherited from

Node.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16230

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: ``1``

Set when node and other are not in the same tree.

#### Inherited from

Node.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16224

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: ``4``

Set when other is following node.

#### Inherited from

Node.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16228

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: ``32``

#### Inherited from

Node.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16233

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: ``2``

Set when other is preceding node.

#### Inherited from

Node.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16226

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: ``10``

node is a doctype.

#### Inherited from

Node.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16219

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: ``1``

node is an element.

#### Inherited from

Node.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16204

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: ``6``

#### Inherited from

Node.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16211

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: ``5``

#### Inherited from

Node.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16210

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: ``12``

#### Inherited from

Node.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16222

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: ``7``

node is a ProcessingInstruction node.

#### Inherited from

Node.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16213

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: ``3``

node is a Text node.

#### Inherited from

Node.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16207

___

### ariaAtomic

• **ariaAtomic**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)

#### Inherited from

ARIAMixin.ariaAtomic

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2209

___

### ariaAutoComplete

• **ariaAutoComplete**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)

#### Inherited from

ARIAMixin.ariaAutoComplete

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2211

___

### ariaBusy

• **ariaBusy**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)

#### Inherited from

ARIAMixin.ariaBusy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2213

___

### ariaChecked

• **ariaChecked**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)

#### Inherited from

ARIAMixin.ariaChecked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2215

___

### ariaColCount

• **ariaColCount**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)

#### Inherited from

ARIAMixin.ariaColCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2217

___

### ariaColIndex

• **ariaColIndex**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)

#### Inherited from

ARIAMixin.ariaColIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2219

___

### ariaColSpan

• **ariaColSpan**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)

#### Inherited from

ARIAMixin.ariaColSpan

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2221

___

### ariaCurrent

• **ariaCurrent**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)

#### Inherited from

ARIAMixin.ariaCurrent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2223

___

### ariaDisabled

• **ariaDisabled**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)

#### Inherited from

ARIAMixin.ariaDisabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2225

___

### ariaExpanded

• **ariaExpanded**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)

#### Inherited from

ARIAMixin.ariaExpanded

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2227

___

### ariaHasPopup

• **ariaHasPopup**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)

#### Inherited from

ARIAMixin.ariaHasPopup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2229

___

### ariaHidden

• **ariaHidden**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)

#### Inherited from

ARIAMixin.ariaHidden

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2231

___

### ariaInvalid

• **ariaInvalid**: `string`

#### Inherited from

ARIAMixin.ariaInvalid

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2232

___

### ariaKeyShortcuts

• **ariaKeyShortcuts**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)

#### Inherited from

ARIAMixin.ariaKeyShortcuts

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2234

___

### ariaLabel

• **ariaLabel**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)

#### Inherited from

ARIAMixin.ariaLabel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2236

___

### ariaLevel

• **ariaLevel**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)

#### Inherited from

ARIAMixin.ariaLevel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2238

___

### ariaLive

• **ariaLive**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)

#### Inherited from

ARIAMixin.ariaLive

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2240

___

### ariaModal

• **ariaModal**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)

#### Inherited from

ARIAMixin.ariaModal

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2242

___

### ariaMultiLine

• **ariaMultiLine**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)

#### Inherited from

ARIAMixin.ariaMultiLine

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2244

___

### ariaMultiSelectable

• **ariaMultiSelectable**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)

#### Inherited from

ARIAMixin.ariaMultiSelectable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2246

___

### ariaOrientation

• **ariaOrientation**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)

#### Inherited from

ARIAMixin.ariaOrientation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2248

___

### ariaPlaceholder

• **ariaPlaceholder**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)

#### Inherited from

ARIAMixin.ariaPlaceholder

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2250

___

### ariaPosInSet

• **ariaPosInSet**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)

#### Inherited from

ARIAMixin.ariaPosInSet

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2252

___

### ariaPressed

• **ariaPressed**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)

#### Inherited from

ARIAMixin.ariaPressed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2254

___

### ariaReadOnly

• **ariaReadOnly**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)

#### Inherited from

ARIAMixin.ariaReadOnly

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2256

___

### ariaRequired

• **ariaRequired**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)

#### Inherited from

ARIAMixin.ariaRequired

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2258

___

### ariaRoleDescription

• **ariaRoleDescription**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)

#### Inherited from

ARIAMixin.ariaRoleDescription

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2260

___

### ariaRowCount

• **ariaRowCount**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)

#### Inherited from

ARIAMixin.ariaRowCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2262

___

### ariaRowIndex

• **ariaRowIndex**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)

#### Inherited from

ARIAMixin.ariaRowIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2264

___

### ariaRowSpan

• **ariaRowSpan**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)

#### Inherited from

ARIAMixin.ariaRowSpan

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2266

___

### ariaSelected

• **ariaSelected**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)

#### Inherited from

ARIAMixin.ariaSelected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2268

___

### ariaSetSize

• **ariaSetSize**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)

#### Inherited from

ARIAMixin.ariaSetSize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2270

___

### ariaSort

• **ariaSort**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)

#### Inherited from

ARIAMixin.ariaSort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2272

___

### ariaValueMax

• **ariaValueMax**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)

#### Inherited from

ARIAMixin.ariaValueMax

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2274

___

### ariaValueMin

• **ariaValueMin**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)

#### Inherited from

ARIAMixin.ariaValueMin

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2276

___

### ariaValueNow

• **ariaValueNow**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)

#### Inherited from

ARIAMixin.ariaValueNow

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2278

___

### ariaValueText

• **ariaValueText**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)

#### Inherited from

ARIAMixin.ariaValueText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2280

___

### arkElement

• `Optional` **arkElement**: `unknown`

#### Defined in

src/types/element.d.ts:64

___

### assignedSlot

• `Readonly` **assignedSlot**: `HTMLSlotElement`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/assignedSlot)

#### Inherited from

Slottable.assignedSlot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:21296

___

### attributes

• `Readonly` **attributes**: `NamedNodeMap`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/attributes)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7600

___

### avRecordElement

• `Optional` **avRecordElement**: `unknown`

#### Defined in

src/types/element.d.ts:65

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/baseURI)

#### Inherited from

Node.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16074

___

### calendarElement

• `Optional` **calendarElement**: `unknown`

#### Defined in

src/types/element.d.ts:66

___

### childElementCount

• `Readonly` **childElementCount**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/childElementCount)

#### Inherited from

ParentNode.childElementCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16763

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`\<`ChildNode`\>

Returns the children.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/childNodes)

#### Inherited from

Node.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16080

___

### children

• `Readonly` **children**: `HTMLCollection`

Returns the child elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/children)

#### Inherited from

ParentNode.children

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16769

___

### classList

• `Readonly` **classList**: `DOMTokenList`

Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/classList)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7606

___

### className

• **className**: `string`

Returns the value of element's class content attribute. Can be set to change it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/className)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7612

___

### clientHeight

• `Readonly` **clientHeight**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientHeight)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7614

___

### clientLeft

• `Readonly` **clientLeft**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientLeft)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7616

___

### clientTop

• `Readonly` **clientTop**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientTop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7618

___

### clientWidth

• `Readonly` **clientWidth**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientWidth)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7620

___

### elementId

• **elementId**: `string`

#### Defined in

src/types/element.d.ts:60

___

### elementType

• **elementType**: `number`

#### Defined in

src/types/element.d.ts:59

___

### extBufForUI

• **extBufForUI**: `string`

#### Defined in

src/types/element.d.ts:61

___

### faceElement

• `Optional` **faceElement**: [`FaceElement`](element.FaceElement.md)

#### Defined in

src/types/element.d.ts:67

___

### fileElement

• `Optional` **fileElement**: `unknown`

#### Defined in

src/types/element.d.ts:68

___

### firstChild

• `Readonly` **firstChild**: `ChildNode`

Returns the first child.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/firstChild)

#### Inherited from

Node.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16086

___

### firstElementChild

• `Readonly` **firstElementChild**: [`Element`](element.Element.md)

Returns the first child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/firstElementChild)

#### Inherited from

ParentNode.firstElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16775

___

### giphyElement

• `Optional` **giphyElement**: `unknown`

#### Defined in

src/types/element.d.ts:69

___

### grayTipElement

• `Optional` **grayTipElement**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aioOpGrayTipElement` | `unknown` |
| `blockGrayTipElement` | `unknown` |
| `buddyElement` | `unknown` |
| `buddyNotifyElement` | `unknown` |
| `emojiReplyElement` | `unknown` |
| `essenceElement` | `unknown` |
| `feedMsgElement` | `unknown` |
| `fileReceiptElement` | `unknown` |
| `groupElement` | `unknown` |
| `groupNotifyElement` | `unknown` |
| `jsonGrayTipElement` | `unknown` |
| `localGrayTipElement` | `unknown` |
| `proclamationElement` | `unknown` |
| `revokeElement` | `unknown` |
| `subElementType` | `unknown` |
| `xmlElement` | [`XMLElement`](element.XMLElement.md) |

#### Defined in

src/types/element.d.ts:70

___

### id

• **id**: `string`

Returns the value of element's id content attribute. Can be set to change it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/id)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7626

___

### inlineKeyboardElement

• `Optional` **inlineKeyboardElement**: `unknown`

#### Defined in

src/types/element.d.ts:88

___

### innerHTML

• **innerHTML**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/innerHTML)

#### Inherited from

InnerHTML.innerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14279

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isConnected)

#### Inherited from

Node.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16092

___

### lastChild

• `Readonly` **lastChild**: `ChildNode`

Returns the last child.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lastChild)

#### Inherited from

Node.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16098

___

### lastElementChild

• `Readonly` **lastElementChild**: [`Element`](element.Element.md)

Returns the last child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lastElementChild)

#### Inherited from

ParentNode.lastElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16781

___

### liveGiftElement

• `Optional` **liveGiftElement**: `unknown`

#### Defined in

src/types/element.d.ts:89

___

### localName

• `Readonly` **localName**: `string`

Returns the local name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/localName)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7632

___

### markdownElement

• `Optional` **markdownElement**: `unknown`

#### Defined in

src/types/element.d.ts:90

___

### marketFaceElement

• `Optional` **marketFaceElement**: `unknown`

#### Defined in

src/types/element.d.ts:91

___

### multiForwardMsgElement

• `Optional` **multiForwardMsgElement**: `unknown`

#### Defined in

src/types/element.d.ts:92

___

### namespaceURI

• `Readonly` **namespaceURI**: `string`

Returns the namespace.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/namespaceURI)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7638

___

### nextElementSibling

• `Readonly` **nextElementSibling**: [`Element`](element.Element.md)

Returns the first following sibling that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/nextElementSibling)

#### Inherited from

NonDocumentTypeChildNode.nextElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16354

___

### nextSibling

• `Readonly` **nextSibling**: `ChildNode`

Returns the next sibling.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)

#### Inherited from

Node.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16104

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeName)

#### Inherited from

Node.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16110

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeType)

#### Inherited from

Node.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16116

___

### nodeValue

• **nodeValue**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeValue)

#### Inherited from

Node.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16118

___

### onfullscreenchange

• **onfullscreenchange**: (`this`: [`Element`](element.Element.md), `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenchange_event)

#### Type declaration

▸ (`this`, `ev`): `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenchange_event)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Element`](element.Element.md) |
| `ev` | `Event` |

##### Returns

`any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7640

___

### onfullscreenerror

• **onfullscreenerror**: (`this`: [`Element`](element.Element.md), `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenerror_event)

#### Type declaration

▸ (`this`, `ev`): `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenerror_event)

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Element`](element.Element.md) |
| `ev` | `Event` |

##### Returns

`any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7642

___

### outerHTML

• **outerHTML**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/outerHTML)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7644

___

### ownerDocument

• `Readonly` **ownerDocument**: `Document`

#### Overrides

Node.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7645

___

### parentElement

• `Readonly` **parentElement**: `HTMLElement`

Returns the parent element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentElement)

#### Inherited from

Node.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16130

___

### parentNode

• `Readonly` **parentNode**: `ParentNode`

Returns the parent.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentNode)

#### Inherited from

Node.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16136

___

### part

• `Readonly` **part**: `DOMTokenList`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/part)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7647

___

### picElement

• `Optional` **picElement**: [`PicElement`](element.PicElement.md)

#### Defined in

src/types/element.d.ts:62

___

### prefix

• `Readonly` **prefix**: `string`

Returns the namespace prefix.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/prefix)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7653

___

### previousElementSibling

• `Readonly` **previousElementSibling**: [`Element`](element.Element.md)

Returns the first preceding sibling that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/previousElementSibling)

#### Inherited from

NonDocumentTypeChildNode.previousElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16360

___

### previousSibling

• `Readonly` **previousSibling**: `ChildNode`

Returns the previous sibling.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/previousSibling)

#### Inherited from

Node.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16142

___

### pttElement

• `Optional` **pttElement**: `unknown`

#### Defined in

src/types/element.d.ts:93

___

### replyElement

• `Optional` **replyElement**: `unknown`

#### Defined in

src/types/element.d.ts:94

___

### role

• **role**: `string`

#### Inherited from

ARIAMixin.role

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2281

___

### scrollHeight

• `Readonly` **scrollHeight**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollHeight)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7655

___

### scrollLeft

• **scrollLeft**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollLeft)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7657

___

### scrollTop

• **scrollTop**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7659

___

### scrollWidth

• `Readonly` **scrollWidth**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollWidth)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7661

___

### shadowRoot

• `Readonly` **shadowRoot**: `ShadowRoot`

Returns element's shadow root, if any, and if shadow root's mode is "open", and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/shadowRoot)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7667

___

### slot

• **slot**: `string`

Returns the value of element's slot content attribute. Can be set to change it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/slot)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7673

___

### structLongMsgElement

• `Optional` **structLongMsgElement**: `unknown`

#### Defined in

src/types/element.d.ts:95

___

### tagName

• `Readonly` **tagName**: `string`

Returns the HTML-uppercased qualified name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7679

___

### textContent

• **textContent**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/textContent)

#### Inherited from

Node.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16144

___

### textElement

• `Optional` **textElement**: [`TextElement`](element.TextElement.md)

#### Defined in

src/types/element.d.ts:63

___

### textGiftElement

• `Optional` **textGiftElement**: `unknown`

#### Defined in

src/types/element.d.ts:96

___

### videoElement

• `Optional` **videoElement**: `unknown`

#### Defined in

src/types/element.d.ts:97

___

### walletElement

• `Optional` **walletElement**: `unknown`

#### Defined in

src/types/element.d.ts:98

___

### yoloGameResultElement

• `Optional` **yoloGameResultElement**: `unknown`

#### Defined in

src/types/element.d.ts:99

## Methods

### addEventListener

▸ **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Element`](element.Element.md), `ev`: `ElementEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Overrides

Node.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7843

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Overrides

Node.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7844

___

### after

▸ **after**(`...nodes`): `void`

Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/after)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

ChildNode.after

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5599

___

### animate

▸ **animate**(`keyframes`, `options?`): `Animation`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframes` | `Keyframe`[] \| `PropertyIndexedKeyframes` |
| `options?` | `number` \| `KeyframeAnimationOptions` |

#### Returns

`Animation`

#### Inherited from

Animatable.animate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2431

___

### append

▸ **append**(`...nodes`): `void`

Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/append)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

ParentNode.append

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16789

___

### appendChild

▸ **appendChild**\<`T`\>(`node`): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/appendChild)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`T`

#### Inherited from

Node.appendChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16146

___

### attachShadow

▸ **attachShadow**(`init`): `ShadowRoot`

Creates a shadow root for element and returns it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/attachShadow)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `ShadowRootInit` |

#### Returns

`ShadowRoot`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7685

___

### before

▸ **before**(`...nodes`): `void`

Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/before)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

ChildNode.before

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5607

___

### checkVisibility

▸ **checkVisibility**(`options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `CheckVisibilityOptions` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7686

___

### cloneNode

▸ **cloneNode**(`deep?`): `Node`

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep?` | `boolean` |

#### Returns

`Node`

#### Inherited from

Node.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16152

___

### closest

▸ **closest**\<`K`\>(`selector`): `HTMLElementTagNameMap`[`K`]

Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/closest)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

`HTMLElementTagNameMap`[`K`]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7692

▸ **closest**\<`K`\>(`selector`): `SVGElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

`SVGElementTagNameMap`[`K`]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7693

▸ **closest**\<`K`\>(`selector`): `MathMLElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

`MathMLElementTagNameMap`[`K`]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7694

▸ **closest**\<`E`\>(`selectors`): `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](element.Element.md) = [`Element`](element.Element.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`E`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7695

___

### compareDocumentPosition

▸ **compareDocumentPosition**(`other`): `number`

Returns a bitmask indicating the position of other relative to node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/compareDocumentPosition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Node` |

#### Returns

`number`

#### Inherited from

Node.compareDocumentPosition

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16158

___

### computedStyleMap

▸ **computedStyleMap**(): `StylePropertyMapReadOnly`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/computedStyleMap)

#### Returns

`StylePropertyMapReadOnly`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7697

___

### contains

▸ **contains**(`other`): `boolean`

Returns true if other is an inclusive descendant of node, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/contains)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Node` |

#### Returns

`boolean`

#### Inherited from

Node.contains

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16164

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

Node.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8217

___

### getAnimations

▸ **getAnimations**(`options?`): `Animation`[]

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAnimations)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `GetAnimationsOptions` |

#### Returns

`Animation`[]

#### Inherited from

Animatable.getAnimations

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2433

___

### getAttribute

▸ **getAttribute**(`qualifiedName`): `string`

Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttribute)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7703

___

### getAttributeNS

▸ **getAttributeNS**(`namespace`, `localName`): `string`

Returns element's attribute whose namespace is namespace and local name is localName, and null if there is no such attribute otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `localName` | `string` |

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7709

___

### getAttributeNames

▸ **getAttributeNames**(): `string`[]

Returns the qualified names of all element's attributes. Can contain duplicates.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNames)

#### Returns

`string`[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7715

___

### getAttributeNode

▸ **getAttributeNode**(`qualifiedName`): `Attr`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`Attr`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7717

___

### getAttributeNodeNS

▸ **getAttributeNodeNS**(`namespace`, `localName`): `Attr`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNodeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `localName` | `string` |

#### Returns

`Attr`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7719

___

### getBoundingClientRect

▸ **getBoundingClientRect**(): `DOMRect`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getBoundingClientRect)

#### Returns

`DOMRect`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7721

___

### getClientRects

▸ **getClientRects**(): `DOMRectList`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getClientRects)

#### Returns

`DOMRectList`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7723

___

### getElementsByClassName

▸ **getElementsByClassName**(`classNames`): `HTMLCollectionOf`\<[`Element`](element.Element.md)\>

Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByClassName)

#### Parameters

| Name | Type |
| :------ | :------ |
| `classNames` | `string` |

#### Returns

`HTMLCollectionOf`\<[`Element`](element.Element.md)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7729

___

### getElementsByTagName

▸ **getElementsByTagName**\<`K`\>(`qualifiedName`): `HTMLCollectionOf`\<`HTMLElementTagNameMap`[`K`]\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagName)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`\<`HTMLElementTagNameMap`[`K`]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7731

▸ **getElementsByTagName**\<`K`\>(`qualifiedName`): `HTMLCollectionOf`\<`SVGElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`\<`SVGElementTagNameMap`[`K`]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7732

▸ **getElementsByTagName**\<`K`\>(`qualifiedName`): `HTMLCollectionOf`\<`MathMLElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`\<`MathMLElementTagNameMap`[`K`]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7733

▸ **getElementsByTagName**\<`K`\>(`qualifiedName`): `HTMLCollectionOf`\<`HTMLElementDeprecatedTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementDeprecatedTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`\<`HTMLElementDeprecatedTagNameMap`[`K`]\>

**`Deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7735

▸ **getElementsByTagName**(`qualifiedName`): `HTMLCollectionOf`\<[`Element`](element.Element.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`HTMLCollectionOf`\<[`Element`](element.Element.md)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7736

___

### getElementsByTagNameNS

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`\<`HTMLElement`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagNameNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`\<`HTMLElement`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7738

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`\<`SVGElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`\<`SVGElement`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7739

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`\<`MathMLElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1998/Math/MathML"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`\<`MathMLElement`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7740

▸ **getElementsByTagNameNS**(`namespace`, `localName`): `HTMLCollectionOf`\<[`Element`](element.Element.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`\<[`Element`](element.Element.md)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7741

___

### getRootNode

▸ **getRootNode**(`options?`): `Node`

Returns node's root.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/getRootNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `GetRootNodeOptions` |

#### Returns

`Node`

#### Inherited from

Node.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16170

___

### hasAttribute

▸ **hasAttribute**(`qualifiedName`): `boolean`

Returns true if element has an attribute whose qualified name is qualifiedName, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttribute)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7747

___

### hasAttributeNS

▸ **hasAttributeNS**(`namespace`, `localName`): `boolean`

Returns true if element has an attribute whose namespace is namespace and local name is localName.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttributeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `localName` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7753

___

### hasAttributes

▸ **hasAttributes**(): `boolean`

Returns true if element has attributes, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttributes)

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7759

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/hasChildNodes)

#### Returns

`boolean`

#### Inherited from

Node.hasChildNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16176

___

### hasPointerCapture

▸ **hasPointerCapture**(`pointerId`): `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasPointerCapture)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7761

___

### insertAdjacentElement

▸ **insertAdjacentElement**(`where`, `element`): [`Element`](element.Element.md)

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentElement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | `InsertPosition` |
| `element` | [`Element`](element.Element.md) |

#### Returns

[`Element`](element.Element.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7763

___

### insertAdjacentHTML

▸ **insertAdjacentHTML**(`position`, `text`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentHTML)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `InsertPosition` |
| `text` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7765

___

### insertAdjacentText

▸ **insertAdjacentText**(`where`, `data`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentText)

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | `InsertPosition` |
| `data` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7767

___

### insertBefore

▸ **insertBefore**\<`T`\>(`node`, `child`): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/insertBefore)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `child` | `Node` |

#### Returns

`T`

#### Inherited from

Node.insertBefore

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16178

___

### isDefaultNamespace

▸ **isDefaultNamespace**(`namespace`): `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isDefaultNamespace)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Returns

`boolean`

#### Inherited from

Node.isDefaultNamespace

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16180

___

### isEqualNode

▸ **isEqualNode**(`otherNode`): `boolean`

Returns whether node and otherNode have the same properties.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isEqualNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | `Node` |

#### Returns

`boolean`

#### Inherited from

Node.isEqualNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16186

___

### isSameNode

▸ **isSameNode**(`otherNode`): `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isSameNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | `Node` |

#### Returns

`boolean`

#### Inherited from

Node.isSameNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16188

___

### lookupNamespaceURI

▸ **lookupNamespaceURI**(`prefix`): `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupNamespaceURI)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

`string`

#### Inherited from

Node.lookupNamespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16190

___

### lookupPrefix

▸ **lookupPrefix**(`namespace`): `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupPrefix)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Returns

`string`

#### Inherited from

Node.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16192

___

### matches

▸ **matches**(`selectors`): `boolean`

Returns true if matching selectors against element's root yields element, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/matches)

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7773

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/normalize)

#### Returns

`void`

#### Inherited from

Node.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16198

___

### prepend

▸ **prepend**(`...nodes`): `void`

Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/prepend)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

ParentNode.prepend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16797

___

### querySelector

▸ **querySelector**\<`K`\>(`selectors`): `HTMLElementTagNameMap`[`K`]

Returns the first element that is a descendant of node that matches selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelector)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`HTMLElementTagNameMap`[`K`]

#### Inherited from

ParentNode.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16803

▸ **querySelector**\<`K`\>(`selectors`): `SVGElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`SVGElementTagNameMap`[`K`]

#### Inherited from

ParentNode.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16804

▸ **querySelector**\<`K`\>(`selectors`): `MathMLElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`MathMLElementTagNameMap`[`K`]

#### Inherited from

ParentNode.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16805

▸ **querySelector**\<`K`\>(`selectors`): `HTMLElementDeprecatedTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementDeprecatedTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`HTMLElementDeprecatedTagNameMap`[`K`]

**`Deprecated`**

#### Inherited from

ParentNode.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16807

▸ **querySelector**\<`E`\>(`selectors`): `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](element.Element.md) = [`Element`](element.Element.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`E`

#### Inherited from

ParentNode.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16808

___

### querySelectorAll

▸ **querySelectorAll**\<`K`\>(`selectors`): `NodeListOf`\<`HTMLElementTagNameMap`[`K`]\>

Returns all element descendants of node that match selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`\<`HTMLElementTagNameMap`[`K`]\>

#### Inherited from

ParentNode.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16814

▸ **querySelectorAll**\<`K`\>(`selectors`): `NodeListOf`\<`SVGElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`\<`SVGElementTagNameMap`[`K`]\>

#### Inherited from

ParentNode.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16815

▸ **querySelectorAll**\<`K`\>(`selectors`): `NodeListOf`\<`MathMLElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`\<`MathMLElementTagNameMap`[`K`]\>

#### Inherited from

ParentNode.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16816

▸ **querySelectorAll**\<`K`\>(`selectors`): `NodeListOf`\<`HTMLElementDeprecatedTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementDeprecatedTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`\<`HTMLElementDeprecatedTagNameMap`[`K`]\>

**`Deprecated`**

#### Inherited from

ParentNode.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16818

▸ **querySelectorAll**\<`E`\>(`selectors`): `NodeListOf`\<`E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](element.Element.md) = [`Element`](element.Element.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`NodeListOf`\<`E`\>

#### Inherited from

ParentNode.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16819

___

### releasePointerCapture

▸ **releasePointerCapture**(`pointerId`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/releasePointerCapture)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7775

___

### remove

▸ **remove**(): `void`

Removes node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/remove)

#### Returns

`void`

#### Inherited from

ChildNode.remove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5613

___

### removeAttribute

▸ **removeAttribute**(`qualifiedName`): `void`

Removes element's first attribute whose qualified name is qualifiedName.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttribute)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7781

___

### removeAttributeNS

▸ **removeAttributeNS**(`namespace`, `localName`): `void`

Removes element's attribute whose namespace is namespace and local name is localName.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttributeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `localName` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7787

___

### removeAttributeNode

▸ **removeAttributeNode**(`attr`): `Attr`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttributeNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `Attr` |

#### Returns

`Attr`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7789

___

### removeChild

▸ **removeChild**\<`T`\>(`child`): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/removeChild)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

Node.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16200

___

### removeEventListener

▸ **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Element`](element.Element.md), `ev`: `ElementEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Overrides

Node.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7845

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Overrides

Node.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7846

___

### replaceChild

▸ **replaceChild**\<`T`\>(`node`, `child`): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/replaceChild)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Node` |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

Node.replaceChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16202

___

### replaceChildren

▸ **replaceChildren**(`...nodes`): `void`

Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/replaceChildren)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

ParentNode.replaceChildren

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16827

___

### replaceWith

▸ **replaceWith**(`...nodes`): `void`

Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/replaceWith)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

ChildNode.replaceWith

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5621

___

### requestFullscreen

▸ **requestFullscreen**(`options?`): `Promise`\<`void`\>

Displays element fullscreen and resolves promise when done.

When supplied, options's navigationUI member indicates whether showing navigation UI while in fullscreen is preferred or not. If set to "show", navigation simplicity is preferred over screen space, and if set to "hide", more screen space is preferred. User agents are always free to honor user preference over the application's. The default value "auto" indicates no application preference.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/requestFullscreen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `FullscreenOptions` |

#### Returns

`Promise`\<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7797

___

### requestPointerLock

▸ **requestPointerLock**(): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/requestPointerLock)

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7799

___

### scroll

▸ **scroll**(`options?`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scroll)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScrollToOptions` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7801

▸ **scroll**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7802

___

### scrollBy

▸ **scrollBy**(`options?`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollBy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScrollToOptions` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7804

▸ **scrollBy**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7805

___

### scrollIntoView

▸ **scrollIntoView**(`arg?`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollIntoView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | `boolean` \| `ScrollIntoViewOptions` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7807

___

### scrollTo

▸ **scrollTo**(`options?`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScrollToOptions` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7809

▸ **scrollTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7810

___

### setAttribute

▸ **setAttribute**(`qualifiedName`, `value`): `void`

Sets the value of element's first attribute whose qualified name is qualifiedName to value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttribute)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7816

___

### setAttributeNS

▸ **setAttributeNS**(`namespace`, `qualifiedName`, `value`): `void`

Sets the value of element's attribute whose namespace is namespace and local name is localName to value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `qualifiedName` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7822

___

### setAttributeNode

▸ **setAttributeNode**(`attr`): `Attr`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `Attr` |

#### Returns

`Attr`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7824

___

### setAttributeNodeNS

▸ **setAttributeNodeNS**(`attr`): `Attr`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNodeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `Attr` |

#### Returns

`Attr`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7826

___

### setPointerCapture

▸ **setPointerCapture**(`pointerId`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setPointerCapture)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7828

___

### toggleAttribute

▸ **toggleAttribute**(`qualifiedName`, `force?`): `boolean`

If force is not given, "toggles" qualifiedName, removing it if it is present and adding it if it is not present. If force is true, adds qualifiedName. If force is false, removes qualifiedName.

Returns true if qualifiedName is now present, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/toggleAttribute)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `force?` | `boolean` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7836

___

### webkitMatchesSelector

▸ **webkitMatchesSelector**(`selectors`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`boolean`

**`Deprecated`**

This is a legacy alias of `matches`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/matches)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7842
