(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(2),i=n(6),r=(n(0),n(117)),o={id:"bip-0009",title:"BIP-0009"},s={id:"bip-0009",title:"BIP-0009",description:"`",source:"@site/docs/bip-0009.md",permalink:"/BIPS_website/docs/bip-0009",editUrl:"https://github.com/anoop-b/BIPS_website/edit/master/docs/bip-0009.md",sidebar:"someSidebar",previous:{title:"BIP-0008",permalink:"/BIPS_website/docs/bip-0008"},next:{title:"Contribution",permalink:"/BIPS_website/docs/contribute"}},l=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Abstract",id:"abstract",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Specification",id:"specification",children:[{value:"Selection guidelines",id:"selection-guidelines",children:[]},{value:"States",id:"states",children:[]},{value:"Bit flags",id:"bit-flags",children:[]},{value:"New consensus rules",id:"new-consensus-rules",children:[]},{value:"State transitions",id:"state-transitions",children:[]},{value:"Warning mechanism",id:"warning-mechanism",children:[]},{value:"getblocktemplate changes",id:"getblocktemplate-changes",children:[]},{value:"template request",id:"template-request",children:[]},{value:"template",id:"template",children:[]}]},{value:"Support for future changes",id:"support-for-future-changes",children:[]},{value:"Rationale",id:"rationale",children:[]},{value:"Deployments",id:"deployments",children:[]},{value:"Copyright",id:"copyright",children:[]}],b={rightToc:l};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"BIP: 9\nTitle: Version bits with timeout and delay\nAuthor: Pieter Wuille &lt;pieter.wuille@gmail.com&gt;\n        Peter Todd &lt;pete@petertodd.org&gt;\n        Greg Maxwell &lt;greg@xiph.org&gt;\n        Rusty Russell &lt;rusty@rustcorp.com.au&gt;\nComments-Summary: No comments yet.\nComments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0009\nStatus: Final\nType: Informational\nCreated: 2015-10-04\nLicense: PD\n")),Object(r.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#Abstract"}),"Abstract")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#Motivation"}),"Motivation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#Specification"}),"Specification"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#Selection_guidelines"}),"Selection guidelines")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#States"}),"States")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#Bit_flags"}),"Bit flags")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#New_consensus_rules"}),"New consensus rules")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#State_transitions"}),"State transitions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#Warning_mechanism"}),"Warning mechanism")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#getblocktemplate_changes"}),"getblocktemplate changes")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#Support_for_future_changes"}),"Support for future changes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#Rationale"}),"Rationale")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#Deployments"}),"Deployments")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#Copyright"}),"Copyright"))),Object(r.b)("h2",{id:"abstract"},"Abstract"),Object(r.b)("p",null,"This document specifies a proposed change to the semantics of the\n","'","version","'"," field in Bitcoin blocks, allowing multiple backward-compatible\nchanges (further called ",'"',"soft forks",'"',") to be deployed in parallel. It\nrelies on interpreting the version field as a bit vector, where each bit\ncan be used to track an independent change. These are tallied each\nretarget period. Once the consensus change succeeds or times out, there\nis a ",'"',"fallow",'"'," pause after which the bit can be reused for later changes."),Object(r.b)("h2",{id:"motivation"},"Motivation"),Object(r.b)("p",null,"BIP 34 introduced a mechanism for doing soft-forking changes without a\npredefined flag timestamp (or flag block height), instead relying on\nmeasuring miner support indicated by a higher version number in block\nheaders. As it relies on comparing version numbers as integers however,\nit only supports one single change being rolled out at once, requiring\ncoordination between proposals, and does not allow for permanent\nrejection: as long as one soft fork is not fully rolled out, no future\none can be scheduled."),Object(r.b)("p",null,"In addition, BIP 34 made the integer comparison (nVersion ",">","= 2) a\nconsensus rule after its 95% threshold was reached, removing 231+2\nvalues from the set of valid version numbers (all negative numbers, as\nnVersion is interpreted as a signed integer, as well as 0 and 1). This\nindicates another downside this approach: every upgrade permanently\nrestricts the set of allowed nVersion field values. This approach was\nlater reused in BIP 66 and BIP 65, which further removed nVersions 2 and\n3 as valid options. As will be shown further, this is unnecessary."),Object(r.b)("h2",{id:"specification"},"Specification"),Object(r.b)("p",null,"Each soft fork deployment is specified by the following per-chain parameters (further elaborated below):"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"name")," specifies a very brief description of the soft\nfork, reasonable for use as an identifier. For deployments described in a\nsingle BIP, it is recommended to use the name ",'"',"bipN",'"'," where N is the\nappropriate BIP number."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"bit")," determines which bit in\nthe nVersion field of the block is to be used to signal the soft fork\nlock-in and activation. It is chosen from the set {0,1,2,...,28}."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"starttime")," specifies a minimum median time past of a block at which the bit gains its meaning."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"timeout")," specifies a time at which the deployment is considered failed. If the\nmedian time past of a block ",">","= timeout and the soft fork has not yet\nlocked in (including this block","'","s bit state), the deployment is\nconsidered failed on all descendants of the block.")),Object(r.b)("h3",{id:"selection-guidelines"},"Selection guidelines"),Object(r.b)("p",null,"The following guidelines are suggested for selecting these parameters for a soft fork:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"name")," should be selected such that no two softforks, concurrent or otherwise, ever use the same name."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"bit")," should be selected such that no two concurrent softforks use the same bit."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"starttime")," should be set to some date in the future, approximately one month after\na software release date including the soft fork. This allows for some\nrelease delays, while preventing triggers as a result of parties running\npre-release software."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"timeout")," should be 1 year (31536000 seconds) after starttime.")),Object(r.b)("p",null,"A later deployment using the same bit is possible as long as the\nstarttime is after the previous one","'","s\ntimeout or activation, but it is discouraged until necessary, and even\nthen recommended to have a pause in between to detect buggy software."),Object(r.b)("h3",{id:"states"},"States"),Object(r.b)("p",null,"With each block and soft fork, we associate a deployment state. The possible states are:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"DEFINED")," is the first state that each soft fork starts out as. The genesis block is by definition in this state for each deployment."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"STARTED")," for blocks past the starttime."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"LOCKED_IN")," for one retarget period after the first retarget period with STARTED\nblocks of which at least threshold have the associated bit set in\nnVersion."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"ACTIVE")," for all blocks after the LOCKED_IN retarget period."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"FAILED")," for one retarget period past the timeout time, if LOCKED_IN was not reached.")),Object(r.b)("h3",{id:"bit-flags"},"Bit flags"),Object(r.b)("p",null,"The nVersion block header field is to be interpreted as a 32-bit\nlittle-endian integer (as present), and bits are selected within this\ninteger as values (1 ","<","<"," N) where N is the bit number."),Object(r.b)("p",null,"Blocks in the STARTED state get an nVersion whose bit position bit is set to 1. The top 3 bits of such blocks must be\n001, so the range of actually possible nVersion values is ","[0x20000000...0x3FFFFFFF]",", inclusive."),Object(r.b)("p",null,"Due to the constraints set by BIP 34, BIP 66 and BIP 65, we only have 0x7FFFFFFB possible nVersion values available.\nThis restricts us to at most 30 independent deployments. By restricting the top 3 bits to 001 we get 29 out of those\nfor the purposes of this proposal, and support two future upgrades for different mechanisms (top bits 010 and 011).\nWhen a block nVersion does not have top bits 001, it is treated as if all\nbits are 0 for the purposes of deployments."),Object(r.b)("p",null,"Miners should continue setting the bit in LOCKED_IN phase so uptake is visible, though this has no effect on\nconsensus rules."),Object(r.b)("h3",{id:"new-consensus-rules"},"New consensus rules"),Object(r.b)("p",null,"The new consensus rules for each soft fork are enforced for each block that has ACTIVE state."),Object(r.b)("h3",{id:"state-transitions"},"State transitions"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/BIPS_website/bip-0009/states.png",alt:null}))),Object(r.b)("p",null,"The genesis block has state DEFINED for each deployment, by definition."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"State GetStateForBlock(block) {\n    if (block.height == 0) {\n        return DEFINED;\n    }\n")),Object(r.b)("p",null,"All blocks within a retarget period have the same state. This means that if\nfloor(block1.height / 2016) = floor(block2.height / 2016), they are guaranteed to have the same state for every\ndeployment."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"    if ((block.height % 2016) != 0) {\n        return GetStateForBlock(block.parent);\n    }\n")),Object(r.b)("p",null,"Otherwise, the next state depends on the previous state:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"    switch (GetStateForBlock(GetAncestorAtHeight(block, block.height - 2016))) {\n")),Object(r.b)("p",null,"We remain in the initial state until either we pass the start time or the timeout. GetMedianTimePast in the code below\nrefers to the median nTime of a block and its 10 predecessors. The expression GetMedianTimePast(block.parent) is\nreferred to as MTP in the diagram above, and is treated as a monotonic clock defined by the chain."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"    case DEFINED:\n        if (GetMedianTimePast(block.parent) &gt;= timeout) {\n            return FAILED;\n        }\n        if (GetMedianTimePast(block.parent) &gt;= starttime) {\n            return STARTED;\n        }\n        return DEFINED;\n")),Object(r.b)("p",null,"After a period in the STARTED state, if we","'","re past the timeout, we switch to FAILED. If not, we tally the bits set,\nand transition to LOCKED_IN if a sufficient number of blocks in the past period set the deployment bit in their\nversion numbers. The threshold is \u22651916 blocks (95% of 2016), or \u22651512 for testnet (75% of 2016).\nThe transition to FAILED takes precedence, as otherwise an ambiguity can arise.\nThere could be two non-overlapping deployments on the same bit, where the first one transitions to LOCKED_IN while the\nother one simultaneously transitions to STARTED, which would mean both would demand setting the bit."),Object(r.b)("p",null,"Note that a block","'","s state never depends on its own nVersion; only on that of its ancestors."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"    case STARTED:\n        if (GetMedianTimePast(block.parent) &gt;= timeout) {\n            return FAILED;\n        }\n        int count = 0;\n        walk = block;\n        for (i = 0; i &lt; 2016; i++) {\n            walk = walk.parent;\n            if (walk.nVersion & 0xE0000000 == 0x20000000 && (walk.nVersion &gt;&gt; bit) & 1 == 1) {\n                count++;\n            }\n        }\n        if (count &gt;= threshold) {\n            return LOCKED_IN;\n        }\n        return STARTED;\n")),Object(r.b)("p",null,"After a retarget period of LOCKED_IN, we automatically transition to ACTIVE."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"    case LOCKED_IN:\n        return ACTIVE;\n")),Object(r.b)("p",null,"And ACTIVE and FAILED are terminal states, which a deployment stays in once they","'","re reached."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"    case ACTIVE:\n        return ACTIVE;\n\n    case FAILED:\n        return FAILED;\n    }\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Implementation")," It should be noted that the states are maintained along block chain\nbranches, but may need recomputation when a reorganization happens."),Object(r.b)("p",null,"Given that the state for a specific block/deployment combination is completely determined by its ancestry before the\ncurrent retarget period (i.e. up to and including its ancestor with height block.height - 1 - (block.height % 2016)),\nit is possible to implement the mechanism above efficiently and safely by caching the resulting state of every multiple-of-2016\nblock, indexed by its parent."),Object(r.b)("h3",{id:"warning-mechanism"},"Warning mechanism"),Object(r.b)("p",null,"To support upgrade warnings, an extra ",'"',"unknown upgrade",'"'," is tracked,\nusing the ",'"',"implicit bit",'"'," mask = (block.nVersion & ~expectedVersion)\n!= 0. Mask will be non-zero whenever an unexpected bit is set in\nnVersion. Whenever LOCKED_IN for the unknown upgrade is detected, the\nsoftware should warn loudly about the upcoming soft fork. It should warn\neven more loudly after the next retarget period (when the unknown\nupgrade is in the ACTIVE state)."),Object(r.b)("h3",{id:"getblocktemplate-changes"},"getblocktemplate changes"),Object(r.b)("p",null,"The template request Object is extended to include a new item:"),Object(r.b)("h3",{id:"template-request"},"template request"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"rules"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array of Strings"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"list of supported softfork deployments, by name")))),Object(r.b)("p",null,"The template Object is also extended:"),Object(r.b)("h3",{id:"template"},"template"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"rules"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array of Strings"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"list of softfork deployments, by name, that are active state")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"vbavailable"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"set of pending, supported softfork deployments; each uses the softfork name as the key, and the softfork bit as its value")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"vbrequired"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bit mask of softfork deployment version bits the server requires enabled in submissions")))),Object(r.b)("p",null,"The ",'"',"version",'"'," key of the template is retained, and used to indicate\nthe server","'","s preference of deployments.\nIf versionbits is being used, ",'"',"version",'"'," MUST be within the versionbits\nrange of ","[0x20000000...0x3FFFFFFF]",".\nMiners MAY clear or set bits in the block version WITHOUT any special\n",'"',"mutable",'"'," key, provided they are listed among the template","'","s\n",'"',"vbavailable",'"'," and (when clearing is desired) NOT included as a bit in\n",'"',"vbrequired",'"',"."),Object(r.b)("p",null,"Softfork deployment names listed in ",'"',"rules",'"'," or as keys in\n",'"',"vbavailable",'"'," may be prefixed by a ","'","!","'"," character.\nWithout this prefix, GBT clients may assume the rule will not impact\nusage of the template as-is; typical examples of this would be when\npreviously valid transactions cease to be valid, such as BIPs 16, 65,\n66, 68, 112, and 113.\nIf a client does not understand a rule without the prefix, it may use it\nunmodified for mining.\nOn the other hand, when this prefix is used, it indicates a more subtle\nchange to the block structure or generation transaction; examples of\nthis would be BIP 34 (because it modifies coinbase construction) and 141\n(since it modifies the txid hashing and adds a commitment to the\ngeneration transaction).\nA client that does not understand a rule prefixed by ","'","!","'"," must not\nattempt to process the template, and must not attempt to use it for\nmining even unmodified."),Object(r.b)("h2",{id:"support-for-future-changes"},"Support for future changes"),Object(r.b)("p",null,"The mechanism described above is very generic, and variations are\npossible for future soft forks. Here are some ideas that can be taken\ninto account."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Modified thresholds")," The 1916 threshold (based on in BIP 34","'","s 95%) does not have to be\nmaintained for eternity, but changes should take the effect on the\nwarning system into account. In particular, having a lock-in threshold\nthat is incompatible with the one used for the warning system may have\nlong-term effects, as the warning system cannot rely on a permanently\ndetectable condition anymore."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Conflicting soft forks")," At some point, two mutually exclusive soft forks may be proposed. The\nnaive way to deal with this is to never create software that implements\nboth, but that is making a bet that at least one side is guaranteed to\nlose. Better would be to encode ",'"',"soft fork X cannot be locked-in",'"'," as\nconsensus rule for the conflicting soft fork - allowing software that\nsupports both, but can never trigger conflicting changes."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Multi-stage soft forks")," Soft forks right now are typically treated as booleans: they go from an\ninactive to an active state in blocks. Perhaps at some point there is\ndemand for a change that has a larger number of stages, with additional\nvalidation rules that get enabled one by one. The above mechanism can be\nadapted to support this, by interpreting a combination of bits as an\ninteger, rather than as isolated bits. The warning system is compatible\nwith this, as (nVersion & ~nExpectedVersion) will always be non-zero\nfor increasing integers."),Object(r.b)("h2",{id:"rationale"},"Rationale"),Object(r.b)("p",null,"The failure timeout allows eventual reuse of bits even if a soft fork was\nnever activated, so it","'","s clear that the new use of the bit refers to a\nnew BIP. It","'","s deliberately very course grained, to take into account\nreasonable development and deployment delays. There are unlikely to be\nenough failed proposals to cause a bit shortage."),Object(r.b)("p",null,"The fallow period at the conclusion of a soft fork attempt allows some\ndetection of buggy clients, and allows time for warnings and software\nupgrades for successful soft forks."),Object(r.b)("h2",{id:"deployments"},"Deployments"),Object(r.b)("p",null,"A living list of deployment proposals can be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0009/assignments.mediawiki"}),"here"),"."),Object(r.b)("h2",{id:"copyright"},"Copyright"),Object(r.b)("p",null,"This document is placed in the public domain."))}c.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),c=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=c(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,d=p["".concat(o,".").concat(u)]||p[u]||h[u]||r;return n?i.a.createElement(d,s({ref:t},b,{components:n})):i.a.createElement(d,s({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);