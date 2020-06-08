(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(6),o=(n(0),n(117)),r={id:"bip-0001",title:"BIP-0001"},s={id:"bip-0001",title:"BIP-0001",description:"`",source:"@site/docs/bip-0001.md",permalink:"/BIPS_website/docs/bip-0001",editUrl:"https://github.com/anoop-b/BIPS_website/edit/master/docs/bip-0001.md",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/BIPS_website/docs/doc0"},next:{title:"BIP-0002",permalink:"/BIPS_website/docs/bip-0002"}},l=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"What is a BIP?",id:"what-is-a-bip",children:[]},{value:"BIP Types",id:"bip-types",children:[]},{value:"BIP Work Flow",id:"bip-work-flow",children:[]},{value:"What belongs in a successful BIP?",id:"what-belongs-in-a-successful-bip",children:[]},{value:"BIP Formats and Templates",id:"bip-formats-and-templates",children:[{value:"BIP Header Preamble",id:"bip-header-preamble",children:[]},{value:"Auxiliary Files",id:"auxiliary-files",children:[]}]},{value:"Transferring BIP Ownership",id:"transferring-bip-ownership",children:[]},{value:"BIP Editors",id:"bip-editors",children:[]},{value:"BIP Editor Responsibilities &amp; Workflow",id:"bip-editor-responsibilities--workflow",children:[]},{value:"History",id:"history",children:[]},{value:"Changelog",id:"changelog",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"BIP: 1\nTitle: BIP Purpose and Guidelines\nAuthor: Amir Taaki <genjix@riseup.net>\nComments-Summary: No comments yet.\nComments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0001\nStatus: Replaced\nType: Process\nCreated: 2011-08-19\nSuperseded-By: 2\n")),Object(o.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#what-is-a-bip"}),"What is a BIP?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#bip-types"}),"BIP Types")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#bip-work-flow"}),"BIP Work Flow")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#what-belongs-in-a-successful-bip"}),"What belongs in a successful BIP?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#bip-formats-and-templates"}),"BIP Formats and Templates"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#bip-header-preamble"}),"BIP Header Preamble")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#auxiliary-files"}),"Auxiliary Files")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#transferring-bip-ownership"}),"Transferring BIP Ownership")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#bip-editors"}),"BIP Editors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#bip-editor-responsibilities--workflow"}),"BIP Editor Responsibilities & Workflow")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#history"}),"History")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#changelog"}),"Changelog"))),Object(o.b)("h2",{id:"what-is-a-bip"},"What is a BIP?"),Object(o.b)("p",null,"BIP stands for Bitcoin Improvement Proposal. A BIP is a design\ndocument providing information to the Bitcoin community, or describing a\nnew feature for Bitcoin or its processes or environment. The BIP should\nprovide a concise technical specification of the feature and a\nrationale for the feature."),Object(o.b)("p",null,"We intend BIPs to be the primary mechanisms for proposing new\nfeatures, for collecting community input on an issue, and for\ndocumenting the design decisions that have gone into Bitcoin. The BIP\nauthor is responsible for building consensus within the community and\ndocumenting dissenting opinions."),Object(o.b)("p",null,"Because the BIPs are maintained as text files in a versioned\nrepository, their revision history is the historical record of the\nfeature proposal."),Object(o.b)("h2",{id:"bip-types"},"BIP Types"),Object(o.b)("p",null,"There are three kinds of BIP:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A Standards Track BIP describes any change that affects most or\nall Bitcoin implementations, such as a change to the network protocol, a\nchange in block or transaction validity rules, or any change or\naddition that affects the interoperability of applications using\nBitcoin."),Object(o.b)("li",{parentName:"ul"},"An Informational BIP describes a Bitcoin design issue,\nor provides general guidelines or information to the Bitcoin community,\nbut does not propose a new feature. Informational BIPs do not\nnecessarily represent a Bitcoin community consensus or recommendation,\nso users and implementors are free to ignore Informational BIPs or\nfollow their advice."),Object(o.b)("li",{parentName:"ul"},"A Process BIP describes a process\nsurrounding Bitcoin, or proposes a change to (or an event in) a process.\nProcess BIPs are like Standards Track BIPs but apply to areas other\nthan the Bitcoin protocol itself. They may propose an implementation,\nbut not to Bitcoin's codebase; they often require community consensus;\nunlike Informational BIPs, they are more than recommendations, and users\nare typically not free to ignore them. Examples include procedures,\nguidelines, changes to the decision-making process, and changes to the\ntools or environment used in Bitcoin development. Any meta-BIP is also\nconsidered a Process BIP.")),Object(o.b)("h2",{id:"bip-work-flow"},"BIP Work Flow"),Object(o.b)("p",null,"The BIP process begins with a new idea for Bitcoin. Each potential\nBIP must have a champion -- someone who writes the BIP using the style\nand format described below, shepherds the discussions in the appropriate\nforums, and attempts to build community consensus around the idea. The\nBIP champion (a.k.a. Author) should first attempt to ascertain whether\nthe idea is BIP-able. Posting to the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev"}),"bitcoin-dev@lists.linuxfoundation.org")," mailing list (and maybe the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://bitcointalk.org/index.php?board=6.0"}),"Development & Technical Discussion")," forum) is the best way to go about this."),Object(o.b)("p",null,"Vetting an idea publicly before going as far as writing a BIP is\nmeant to save both the potential author and the wider community time.\nMany ideas have been brought forward for changing Bitcoin that have been\nrejected for various reasons. Asking the Bitcoin community first if an\nidea is original helps prevent too much time being spent on something\nthat is guaranteed to be rejected based on prior discussions (searching\nthe internet does not always do the trick). It also helps to make sure\nthe idea is applicable to the entire community and not just the author.\nJust because an idea sounds good to the author does not mean it will\nwork for most people in most areas where Bitcoin is used. Small\nenhancements or patches often don't need standardisation between\nmultiple projects; these don't need a BIP and should be injected into\nthe relevant Bitcoin development work flow with a patch submission to\nthe applicable Bitcoin issue tracker."),Object(o.b)("p",null,"Once the champion has asked the Bitcoin community as to whether an\nidea has any chance of acceptance, a draft BIP should be presented to\nthe ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev"}),"bitcoin-dev")," mailing list. This gives the author a chance to flesh out the draft BIP\nto make it properly formatted, of high quality, and to address\nadditional concerns about the proposal. Following a discussion, the\nproposal should be sent to the bitcoin-dev list and the BIP editor with\nthe draft BIP. This draft must be written in BIP style as described\nbelow, else it will be sent back without further regard until proper\nformatting rules are followed."),Object(o.b)("p",null,"BIP authors are responsible for collecting community feedback on both\nthe initial idea and the BIP before submitting it for review. However,\nwherever possible, long open-ended discussions on public mailing lists\nshould be avoided. Strategies to keep the discussions efficient include:\nsetting up a separate SIG mailing list for the topic, having the BIP\nauthor accept private comments in the early design phases, setting up a\nwiki page or git repository, etc. BIP authors should use their\ndiscretion here."),Object(o.b)("p",null,"It is highly recommended that a single BIP contain a single key\nproposal or new idea. The more focused the BIP, the more successful it\ntends to be. If in doubt, split your BIP into several well-focused ones."),Object(o.b)("p",null,"The BIP editors assign BIP numbers and change their status. Please\nsend all BIP-related email to the BIP editor, which is listed under ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#bip-editors"}),"BIP Editors")," below. Also see ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#bip-editor-responsibilities--Workflow"}),"BIP Editor Responsibilities & Workflow"),". The BIP editor reserves the right to reject BIP proposals if they appear too unfocused or too broad."),Object(o.b)("p",null,'Authors MUST NOT self assign BIP numbers, but should use an alias\nsuch as "bip-johndoe-infinitebitcoins" which includes the author\'s\nname/nick and the BIP subject.'),Object(o.b)("p",null,'If the BIP editor approves, he will assign the BIP a number, label it\nas Standards Track, Informational, or Process, give it status "Draft",\nand add it to the BIPs git repository. The BIP editor will not\nunreasonably deny a BIP. Reasons for denying BIP status include\nduplication of effort, disregard for formatting rules, being too\nunfocused or too broad, being technically unsound, not providing proper\nmotivation or addressing backwards compatibility, or not in keeping with\nthe Bitcoin philosophy. For a BIP to be accepted it must meet certain\nminimum criteria. It must be a clear and complete description of the\nproposed enhancement. The enhancement must represent a net improvement.\nThe proposed implementation, if applicable, must be solid and must not\ncomplicate the protocol unduly.'),Object(o.b)("p",null,"The BIP author may update the Draft as necessary in the git\nrepository. Updates to drafts may also be submitted by the author as\npull requests."),Object(o.b)("p",null,"Standards Track BIPs consist of two parts, a design document and a\nreference implementation. The BIP should be reviewed and accepted before\na reference implementation is begun, unless a reference implementation\nwill aid people in studying the BIP. Standards Track BIPs must include\nan implementation -- in the form of code, a patch, or a URL to same --\nbefore it can be considered Final."),Object(o.b)("p",null,'Once a BIP has been accepted, the reference implementation must be\ncompleted. When the reference implementation is complete and accepted by\nthe community, the status will be changed to "Final".'),Object(o.b)("p",null,'A BIP can also be assigned status "Deferred". The BIP author or\neditor can assign the BIP this status when no progress is being made on\nthe BIP. Once a BIP is deferred, the BIP editor can re-assign it to\ndraft status.'),Object(o.b)("p",null,'A BIP can also be "Rejected". Perhaps after all is said and done it\nwas not a good idea. It is still important to have a record of this\nfact.'),Object(o.b)("p",null,"BIPs can also be superseded by a different BIP, rendering the\noriginal obsolete. This is intended for Informational BIPs, where\nversion 2 of an API can replace version 1."),Object(o.b)("p",null,"The possible paths of the status of BIPs are as follows:"),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"bip-0001/process.png",alt:null}))),Object(o.b)("p",null,"Some Informational and Process BIPs may also have a status of"),Object(o.b)("p",null,'"',"Active",'"'," if they are never meant to be completed. E.g. BIP 1 (this BIP)."),Object(o.b)("h2",{id:"what-belongs-in-a-successful-bip"},"What belongs in a successful BIP?"),Object(o.b)("p",null,"Each BIP should have the following parts:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Preamble -- RFC 822 style headers containing meta-data about the\nBIP, including the BIP number, a short descriptive title (limited to a\nmaximum of 44 characters), the names, and optionally the contact info\nfor each author, etc."),Object(o.b)("li",{parentName:"ul"},"Abstract -- a short (~200 word) description of the technical issue being addressed."),Object(o.b)("li",{parentName:"ul"},"Copyright/public\ndomain -- Each BIP must either be explicitly labelled as placed in the\npublic domain (see this BIP as an example) or licensed under the Open\nPublication License."),Object(o.b)("li",{parentName:"ul"},"Specification -- The technical\nspecification should describe the syntax and semantics of any new\nfeature. The specification should be detailed enough to allow competing,\ninteroperable implementations for any of the current Bitcoin platforms\n(Satoshi, BitcoinJ, bitcoin-js, libbitcoin)."),Object(o.b)("li",{parentName:"ul"},"Motivation -- The\nmotivation is critical for BIPs that want to change the Bitcoin\nprotocol. It should clearly explain why the existing protocol\nspecification is inadequate to address the problem that the BIP solves.\nBIP submissions without sufficient motivation may be rejected outright."),Object(o.b)("li",{parentName:"ul"},"Rationale\n-- The rationale fleshes out the specification by describing what\nmotivated the design and why particular design decisions were made. It\nshould describe alternate designs that were considered and related work,\ne.g. how the feature is supported in other languages."),Object(o.b)("li",{parentName:"ul"},"The\nrationale should provide evidence of consensus within the community and\ndiscuss important objections or concerns raised during discussion."),Object(o.b)("li",{parentName:"ul"},"Backwards\nCompatibility -- All BIPs that introduce backwards incompatibilities\nmust include a section describing these incompatibilities and their\nseverity. The BIP must explain how the author proposes to deal with\nthese incompatibilities. BIP submissions without a sufficient backwards\ncompatibility treatise may be rejected outright."),Object(o.b)("li",{parentName:"ul"},'Reference\nImplementation -- The reference implementation must be completed before\nany BIP is given status "Final", but it need not be completed before the\nBIP is accepted. It is better to finish the specification and rationale\nfirst and reach consensus on it before writing code.'),Object(o.b)("li",{parentName:"ul"},"The final implementation must include test code and documentation appropriate for the Bitcoin protocol.")),Object(o.b)("h2",{id:"bip-formats-and-templates"},"BIP Formats and Templates"),Object(o.b)("p",null,"BIPs should be written in mediawiki or markdown format."),Object(o.b)("h3",{id:"bip-header-preamble"},"BIP Header Preamble"),Object(o.b)("p",null,'Each BIP must begin with an RFC 822 style header preamble. The\nheaders must appear in the following order. Headers marked with "',"*",'" are\noptional and are described below. All other headers are required.'),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"BIP: <BIP number>\nTitle: <BIP title>\nAuthor: <list of authors' real names and optionally, email addrs>\n\n- Discussions-To: <email address>\n  Status: <Draft | Active | Accepted | Deferred | Rejected | Withdrawn | Final | Superseded>\n\n  Type: <Standards Track | Informational | Process>\n  Created: <date created on, in ISO 8601 (yyyy-mm-dd) format>\n\n- Post-History: <dates of postings to bitcoin mailing list>\n- Replaces: <BIP number>\n- Superseded-By: <BIP number>\n- Resolution: <url>\n\n")),Object(o.b)("p",null,"The Author header lists the names, and optionally the email addresses\nof all the authors/owners of the BIP. The format of the Author header\nvalue must be"),Object(o.b)("p",null,"Random J. User ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"mailto:address@dom.ain"}),"address@dom.ain")),Object(o.b)("p",null,"if the email address is included, and just"),Object(o.b)("p",null,"Random J. User"),Object(o.b)("p",null,"if the address is not given."),Object(o.b)("p",null,"If there are multiple authors, each should be on a separate line following RFC 2822 continuation line conventions."),Object(o.b)("p",null,"Note: The Resolution header is required for Standards Track BIPs\nonly. It contains a URL that should point to an email message or other\nweb resource where the pronouncement about the BIP is made."),Object(o.b)("p",null,"While a BIP is in private discussions (usually during the initial\nDraft phase), a Discussions-To header will indicate the mailing list or\nURL where the BIP is being discussed. No Discussions-To header is\nnecessary if the BIP is being discussed privately with the author, or on\nthe bitcoin email mailing lists."),Object(o.b)("p",null,"The Type header specifies the type of BIP: Standards Track, Informational, or Process."),Object(o.b)("p",null,"The Created header records the date that the BIP was assigned a\nnumber, while Post-History is used to record the dates of when new\nversions of the BIP are posted to bitcoin mailing lists. Both headers\nshould be in yyyy-mm-dd format, e.g. 2001-08-14."),Object(o.b)("p",null,"BIPs may have a Requires header, indicating the BIP numbers that this BIP depends on."),Object(o.b)("p",null,"BIPs may also have a Superseded-By header indicating that a BIP has\nbeen rendered obsolete by a later document; the value is the number of\nthe BIP that replaces the current document. The newer BIP must have a\nReplaces header containing the number of the BIP that it rendered\nobsolete."),Object(o.b)("h3",{id:"auxiliary-files"},"Auxiliary Files"),Object(o.b)("p",null,'BIPs may include auxiliary files such as diagrams. Image files should\nbe included in a subdirectory for that BIP. Auxiliary files must be\nnamed BIP-XXXX-Y.ext, where "XXXX" is the BIP number, "Y" is a serial\nnumber (starting at 1), and "ext" is replaced by the actual file\nextension (e.g. "png").'),Object(o.b)("h2",{id:"transferring-bip-ownership"},"Transferring BIP Ownership"),Object(o.b)("p",null,"It occasionally becomes necessary to transfer ownership of BIPs to a\nnew champion. In general, we'd like to retain the original author as a\nco-author of the transferred BIP, but that's really up to the original\nauthor. A good reason to transfer ownership is because the original\nauthor no longer has the time or interest in updating it or following\nthrough with the BIP process, or has fallen off the face of the 'net\n(i.e. is unreachable or not responding to email). A bad reason to\ntransfer ownership is because you don't agree with the direction of the\nBIP. We try to build consensus around a BIP, but if that's not possible,\nyou can always submit a competing BIP."),Object(o.b)("p",null,"If you are interested in assuming ownership of a BIP, send a message\nasking to take over, addressed to both the original author and the BIP\neditor. If the original author doesn't respond to email in a timely\nmanner, the BIP editor will make a unilateral decision (it's not like\nsuch decisions can't be reversed :)."),Object(o.b)("h2",{id:"bip-editors"},"BIP Editors"),Object(o.b)("p",null,"The current BIP editor is Luke Dashjr who can be contacted at ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"mailto:luke_bipeditor@dashjr.org"}),"luke_bipeditor@dashjr.org"),"."),Object(o.b)("h2",{id:"bip-editor-responsibilities--workflow"},"BIP Editor Responsibilities & Workflow"),Object(o.b)("p",null,"The BIP editor subscribes to the Bitcoin development mailing list. All BIP-related correspondence should be sent (or CC'd) to ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"mailto:luke_bipeditor@dashjr.org"}),"luke_bipeditor@dashjr.org"),"."),Object(o.b)("p",null,"For each new BIP that comes in an editor does the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Read the BIP to check if it is ready: sound and complete.\nThe ideas must make technical sense, even if they don't seem likely to\nbe accepted."),Object(o.b)("li",{parentName:"ul"},"The title should accurately describe the content."),Object(o.b)("li",{parentName:"ul"},"Edit\nthe BIP for language (spelling, grammar, sentence structure, etc.),\nmarkup (for reST BIPs), code style (examples should match BIP 8 &\n7).")),Object(o.b)("p",null,"If the BIP isn't ready, the editor will send it back to the author for revision, with specific instructions."),Object(o.b)("p",null,'Once the BIP is ready for the repository it should be submitted as a "pull request" to the ',Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/bitcoin/bips"}),"bitcoin/bips")," repository on GitHub where it may get further feedback."),Object(o.b)("p",null,"The BIP editor will:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Assign a BIP number (almost always just the next\navailable number, but sometimes it's a special/joke number, like 666 or\n3141. in the pull request comments."),Object(o.b)("li",{parentName:"ul"},"Merge the pull request when the author is ready (allowing some time for further peer review)."),Object(o.b)("li",{parentName:"ul"},"List the BIP in ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"doc0"}),"Getting Started")),Object(o.b)("li",{parentName:"ul"},"Send email back to the BIP author with next steps (post to bitcoin-dev mailing list).")),Object(o.b)("p",null,"The BIP editors are intended to fulfill administrative and editorial\nresponsibilities. The BIP editors monitor BIP changes, and correct any\nstructure, grammar, spelling, or markup mistakes we see."),Object(o.b)("h2",{id:"history"},"History"),Object(o.b)("p",null,"This document was derived heavily from Python's PEP-0001. In many\nplaces text was simply copied and modified. Although the PEP-0001 text\nwas written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are\nnot responsible for its use in the Bitcoin Improvement Process, and\nshould not be bothered with technical questions specific to Bitcoin or\nthe BIP process. Please direct all comments to the BIP editors or the\nBitcoin development mailing list."),Object(o.b)("h2",{id:"changelog"},"Changelog"),Object(o.b)("p",null,"10 Oct 2015 - Added clarifications about submission process and BIP number assignment."),Object(o.b)("p",null,"01 Jan 2016 - Clarified early stages of BIP idea championing, collecting community feedback, etc."))}d.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=i,p=b["".concat(r,".").concat(u)]||b[u]||h[u]||o;return n?a.a.createElement(p,s({ref:t},c,{components:n})):a.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);