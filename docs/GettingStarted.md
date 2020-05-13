---
id: doc0
title: Getting Started
sidebar_label: Getting Started
---

 People wishing to submit BIPs, first should propose their idea or document to the [bitcoin-dev@lists.linuxfoundation.org](https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev) mailing list. After discussion, please open a PR. After copy-editing and acceptance, it will be published here.

We are fairly liberal with approving BIPs, and try not to be too 
involved in decision making on behalf of the community. The exception is
 in very rare cases of dispute resolution when a decision is contentious
 and cannot be agreed upon. In those cases, the conservative option will
 always be preferred.

Having a BIP here does not make it a formally accepted standard until its status becomes Final or Active.

Those proposing changes should consider that ultimately consent may rest with the consensus of the Bitcoin users (see also: [economic majority](https://en.bitcoin.it/wiki/Economic_majority)).

## Index

| Number | Title | Owner | Status |
| --- | --- | --- | --- |
| [1](doc2) | BIP Purpose and Guidelines | Amir Taaki | Replaced |
| [2](bip-0002.mediawiki) | BIP process, revised | Luke Dashjr | Active |
| [8](bip-0008.mediawiki) | Version bits with lock-in by height | Shaolin Fry | Rejected |
| [9](bip-0009.mediawiki) | Version bits with timeout and delay | Pieter Wuille, Peter Todd, Greg Maxwell, Rusty Russell | Final |
| [10](bip-0010.mediawiki) | Multi-Sig Transaction Distribution | Alan Reiner | Withdrawn |
| [11](bip-0011.mediawiki) | M-of-N Standard Transactions | Gavin Andresen | Final |
| [12](bip-0012.mediawiki) | OP_EVAL | Gavin Andresen | Withdrawn |
| [13](bip-0013.mediawiki) | Address Format for pay-to-script-hash | Gavin Andresen | Final |
| [14](bip-0014.mediawiki) | Protocol Version and User Agent | Amir Taaki, Patrick Strateman | Final |
| [15](bip-0015.mediawiki) | Aliases | Amir Taaki | Deferred |
| [16](bip-0016.mediawiki) | Pay to Script Hash | Gavin Andresen | Final |
| [17](bip-0017.mediawiki) | OP_CHECKHASHVERIFY (CHV) | Luke Dashjr | Withdrawn |
| [18](bip-0018.mediawiki) | hashScriptCheck | Luke Dashjr | Proposed |
| [19](bip-0019.mediawiki) | M-of-N Standard Transactions (Low SigOp) | Luke Dashjr | Rejected |
| [20](bip-0020.mediawiki) | URI Scheme | Luke Dashjr | Replaced |
| [21](bip-0021.mediawiki) | URI Scheme | Nils Schneider, Matt Corallo | Final |
| [22](bip-0022.mediawiki) | getblocktemplate - Fundamentals | Luke Dashjr | Final |
| [23](bip-0023.mediawiki) | getblocktemplate - Pooled Mining | Luke Dashjr | Final |
| [30](bip-0030.mediawiki) | Duplicate transactions | Pieter Wuille | Final |
| [31](bip-0031.mediawiki) | Pong message | Mike Hearn | Final |
| [32](bip-0032.mediawiki) | Hierarchical Deterministic Wallets | Pieter Wuille | Final |
| [33](bip-0033.mediawiki) | Stratized Nodes | Amir Taaki | Rejected |
| [34](bip-0034.mediawiki) | Block v2, Height in Coinbase | Gavin Andresen | Final |
| [35](bip-0035.mediawiki) | mempool message | Jeff Garzik | Final |
| [36](bip-0036.mediawiki) | Custom Services | Stefan Thomas | Rejected |
| [37](bip-0037.mediawiki) | Connection Bloom filtering | Mike Hearn, Matt Corallo | Final |
| [38](bip-0038.mediawiki) | Passphrase-protected private key | Mike Caldwell, Aaron Voisine | Draft |
| [39](bip-0039.mediawiki) | Mnemonic code for generating deterministic keys | Marek Palatinus, Pavol Rusnak, Aaron Voisine, Sean Bowe | Proposed |
| 40 | Stratum wire protocol | Marek Palatinus | BIP number allocated |
| 41 | Stratum mining protocol | Marek Palatinus | BIP number allocated |
| [42](bip-0042.mediawiki) | A finite monetary supply for Bitcoin | Pieter Wuille | Final |
| [43](bip-0043.mediawiki) | Purpose Field for Deterministic Wallets | Marek Palatinus, Pavol Rusnak | Final |
| [44](bip-0044.mediawiki) | Multi-Account Hierarchy for Deterministic Wallets | Marek Palatinus, Pavol Rusnak | Proposed |
| [45](bip-0045.mediawiki) | Structure for Deterministic P2SH Multisignature Wallets | Manuel Araoz, Ryan X. Charles, Matias Alejo Garcia | Proposed |
| [47](bip-0047.mediawiki) | Reusable Payment Codes for Hierarchical Deterministic Wallets | Justus Ranvier | Draft |
| [49](bip-0049.mediawiki) | Derivation scheme for P2WPKH-nested-in-P2SH based accounts | Daniel Weigl | Final |
| [50](bip-0050.mediawiki) | March 2013 Chain Fork Post-Mortem | Gavin Andresen | Final |
| [60](bip-0060.mediawiki) | Fixed Length "version" Message (Relay-Transactions Field) | Amir Taaki | Draft |
| [61](bip-0061.mediawiki) | Reject P2P message | Gavin Andresen | Final |
| [62](bip-0062.mediawiki) | Dealing with malleability | Pieter Wuille | Withdrawn |
| 63 | Stealth Addresses | Peter Todd | BIP number allocated |
| [64](bip-0064.mediawiki) | getutxo message | Mike Hearn | Draft |
| [65](bip-0065.mediawiki) | OP_CHECKLOCKTIMEVERIFY | Peter Todd | Final |
| [66](bip-0066.mediawiki) | Strict DER signatures | Pieter Wuille | Final |
| [67](bip-0067.mediawiki) | Deterministic Pay-to-script-hash multi-signature addresses through public key sorting | Thomas Kerin, Jean-Pierre Rupp, Ruben de Vries | Proposed |
| [68](bip-0068.mediawiki) | Relative lock-time using consensus-enforced sequence numbers | Mark Friedenbach, BtcDrak, Nicolas Dorier, kinoshitajona | Final |
| [69](bip-0069.mediawiki) | Lexicographical Indexing of Transaction Inputs and Outputs | Kristov Atlas | Proposed |
| [70](bip-0070.mediawiki) | Payment Protocol | Gavin Andresen, Mike Hearn | Final |
| [71](bip-0071.mediawiki) | Payment Protocol MIME types | Gavin Andresen | Final |
| [72](bip-0072.mediawiki) | bitcoin: uri extensions for Payment Protocol | Gavin Andresen | Final |
| [73](bip-0073.mediawiki) | Use "Accept" header for response type negotiation with Payment Request URLs | Stephen Pair | Final |
| [74](bip-0074.mediawiki) | Allow zero value OP_RETURN in Payment Protocol | Toby Padilla | Rejected |
| [75](bip-0075.mediawiki) | Out of Band Address Exchange using Payment Protocol Encryption | Justin Newton, Matt David, Aaron Voisine, James MacWhyte | Final |
| [79](bip-0079.mediawiki) | Bustapay :: a practical coinjoin protocol | Ryan Havar | Proposed |
| [80](bip-0080.mediawiki) | Hierarchy for Non-Colored Voting Pool Deterministic Multisig Wallets | Justus Ranvier, Jimmy Song | Deferred |
| [81](bip-0081.mediawiki) | Hierarchy for Colored Voting Pool Deterministic Multisig Wallets | Justus Ranvier, Jimmy Song | Deferred |
| [83](bip-0083.mediawiki) | Dynamic Hierarchical Deterministic Key Trees | Eric Lombrozo | Draft |
| [84](bip-0084.mediawiki) | Derivation scheme for P2WPKH based accounts | Pavol Rusnak | Draft |
| [90](bip-0090.mediawiki) | Buried Deployments | Suhas Daftuar | Draft |
| [91](bip-0091.mediawiki) | Reduced threshold Segwit MASF | James Hilliard | Final |
| [98](bip-0098.mediawiki) | Fast Merkle Trees | Mark Friedenbach, Kalle Alm, BtcDrak | Draft |
| [99](bip-0099.mediawiki) | Motivation and deployment of consensus rule changes ([soft/hard]forks) | Jorge Timón | Draft |
| [100](bip-0100.mediawiki) | Dynamic maximum block size by miner vote | Jeff Garzik, Tom Harding, Dagur Valberg Johannsson | Rejected |
| [101](bip-0101.mediawiki) | Increase maximum block size | Gavin Andresen | Withdrawn |
| [102](bip-0102.mediawiki) | Block size increase to 2MB | Jeff Garzik | Rejected |
| [103](bip-0103.mediawiki) | Block size following technological growth | Pieter Wuille | Withdrawn |
| [104](bip-0104.mediawiki) | 'Block75' - Max block size like difficulty | t.khan | Draft |
| [105](bip-0105.mediawiki) | Consensus based block size retargeting algorithm | BtcDrak | Draft |
| [106](bip-0106.mediawiki) | Dynamically Controlled Bitcoin Block Size Max Cap | Upal Chakraborty | Draft |
| [107](bip-0107.mediawiki) | Dynamic limit on the block size | Washington Y. Sanchez | Draft |
| [109](bip-0109.mediawiki) | Two million byte size limit with sigop and sighash limits | Gavin Andresen | Rejected |
| [111](bip-0111.mediawiki) | NODE_BLOOM service bit | Matt Corallo, Peter Todd | Proposed |
| [112](bip-0112.mediawiki) | CHECKSEQUENCEVERIFY | BtcDrak, Mark Friedenbach, Eric Lombrozo | Final |
| [113](bip-0113.mediawiki) | Median time-past as endpoint for lock-time calculations | Thomas Kerin, Mark Friedenbach | Final |
| [114](bip-0114.mediawiki) | Merkelized Abstract Syntax Tree | Johnson Lau | Draft |
| [115](bip-0115.mediawiki) | Generic anti-replay protection using Script | Luke Dashjr | Draft |
| [116](bip-0116.mediawiki) | MERKLEBRANCHVERIFY | Mark Friedenbach, Kalle Alm, BtcDrak | Draft |
| [117](bip-0117.mediawiki) | Tail Call Execution Semantics | Mark Friedenbach, Kalle Alm, BtcDrak | Draft |
| [118](bip-0118.mediawiki) | SIGHASH_NOINPUT | Christian Decker | Draft |
| [119](bip-0119.mediawiki) | CHECKTEMPLATEVERIFY | Jeremy Rubin | Draft |
| [120](bip-0120.mediawiki) | Proof of Payment | Kalle Rosenbaum | Withdrawn |
| [121](bip-0121.mediawiki) | Proof of Payment URI scheme | Kalle Rosenbaum | Withdrawn |
| [122](bip-0122.mediawiki) | URI scheme for Blockchain references / exploration | Marco Pontello | Draft |
| [123](bip-0123.mediawiki) | BIP Classification | Eric Lombrozo | Active |
| [124](bip-0124.mediawiki) | Hierarchical Deterministic Script Templates | Eric Lombrozo, William Swanson | Draft |
| [125](bip-0125.mediawiki) | Opt-in Full Replace-by-Fee Signaling | David A. Harding, Peter Todd | Proposed |
| [126](bip-0126.mediawiki) | Best Practices for Heterogeneous Input Script Transactions | Kristov Atlas | Draft |
| [127](bip-0127.mediawiki) | Simple Proof-of-Reserves Transactions | Steven Roose | Draft |
| [130](bip-0130.mediawiki) | sendheaders message | Suhas Daftuar | Proposed |
| [131](bip-0131.mediawiki) | "Coalescing Transaction" Specification (wildcard inputs) | Chris Priest | Draft |
| [132](bip-0132.mediawiki) | Committee-based BIP Acceptance Process | Andy Chase | Withdrawn |
| [133](bip-0133.mediawiki) | feefilter message | Alex Morcos | Draft |
| [134](bip-0134.mediawiki) | Flexible Transactions | Tom Zander | Draft |
| [135](bip-0135.mediawiki) | Generalized version bits voting | Sancho Panza | Draft |
| [136](bip-0136.mediawiki) | Bech32 Encoded Tx Position References | Велеслав, Jonas Schnelli, Daniel Pape | Draft |
| [137](bip-0137.mediawiki) | Signatures of Messages using Private Keys | Christopher Gilliard | Final |
| [140](bip-0140.mediawiki) | Normalized TXID | Christian Decker | Draft |
| [141](bip-0141.mediawiki) | Segregated Witness (Consensus layer) | Eric Lombrozo, Johnson Lau, Pieter Wuille | Final |
| [142](bip-0142.mediawiki) | Address Format for Segregated Witness | Johnson Lau | Withdrawn |
| [143](bip-0143.mediawiki) | Transaction Signature Verification for Version 0 Witness Program | Johnson Lau, Pieter Wuille | Final |
| [144](bip-0144.mediawiki) | Segregated Witness (Peer Services) | Eric Lombrozo, Pieter Wuille | Final |
| [145](bip-0145.mediawiki) | getblocktemplate Updates for Segregated Witness | Luke Dashjr | Final |
| [146](bip-0146.mediawiki) | Dealing with signature encoding malleability | Johnson Lau, Pieter Wuille | Draft |
| [147](bip-0147.mediawiki) | Dealing with dummy stack element malleability | Johnson Lau | Final |
| [148](bip-0148.mediawiki) | Mandatory activation of segwit deployment | Shaolin Fry | Final |
| [149](bip-0149.mediawiki) | Segregated Witness (second deployment) | Shaolin Fry | Withdrawn |
| [150](bip-0150.mediawiki) | Peer Authentication | Jonas Schnelli | Draft |
| [151](bip-0151.mediawiki) | Peer-to-Peer Communication Encryption | Jonas Schnelli | Withdrawn |
| [152](bip-0152.mediawiki) | Compact Block Relay | Matt Corallo | Final |
| [154](bip-0154.mediawiki) | Rate Limiting via peer specified challenges | Karl-Johan Alm | Withdrawn |
| [155](bip-0155.mediawiki) | addrv2 message | Wladimir J. van der Laan | Draft |
| [156](bip-0156.mediawiki) | Dandelion - Privacy Enhancing Routing | Brad Denby, Andrew Miller, Giulia Fanti, Surya Bakshi, Shaileshh Bojja Venkatakrishnan, Pramod Viswanath | Draft |
| [157](bip-0157.mediawiki) | Client Side Block Filtering | Olaoluwa Osuntokun, Alex Akselrod, Jim Posen | Draft |
| [158](bip-0158.mediawiki) | Compact Block Filters for Light Clients | Olaoluwa Osuntokun, Alex Akselrod | Draft |
| [159](bip-0159.mediawiki) | NODE_NETWORK_LIMITED service bit | Jonas Schnelli | Draft |
| [171](bip-0171.mediawiki) | Currency/exchange rate information API | Luke Dashjr | Draft |
| [173](bip-0173.mediawiki) | Base32 address format for native v0-16 witness outputs | Pieter Wuille, Greg Maxwell | Final |
| [174](bip-0174.mediawiki) | Partially Signed Bitcoin Transaction Format | Andrew Chow | Proposed |
| [175](bip-0175.mediawiki) | Pay to Contract Protocol | Omar Shibli, Nicholas Gregory | Draft |
| [176](bip-0176.mediawiki) | Bits Denomination | Jimmy Song | Draft |
| [178](bip-0178.mediawiki) | Version Extended WIF | Karl-Johan Alm | Draft |
| [179](bip-0179.mediawiki) | Name for payment recipient identifiers | Emil Engler, MarcoFalke, Luke Dashjr | Draft |
| [180](bip-0180.mediawiki) | Block size/weight fraud proof | Luke Dashjr | Draft |
| [197](bip-0197.mediawiki) | Hashed Time-Locked Collateral Contract | Matthew Black, Tony Cai | Draft |
| [199](bip-0199.mediawiki) | Hashed Time-Locked Contract transactions | Sean Bowe, Daira Hopwood | Draft |
| [300](bip-0300.mediawiki) | Hashrate Escrows (Consensus layer) | Paul Sztorc, CryptAxe | Draft |
| [301](bip-0301.mediawiki) | Blind Merged Mining (Consensus layer) | Paul Sztorc, CryptAxe | Draft |
| [310](bip-0310.mediawiki) | Stratum protocol extensions | Pavel Moravec, Jan Čapek | Draft |
| [320](bip-0320.mediawiki) | nVersion bits for general purpose use | BtcDrak | Draft |
| [322](bip-0322.mediawiki) | Generic Signed Message Format | Karl-Johan Alm | Draft |
| [325](bip-0325.mediawiki) | Signet | Karl-Johan Alm | Draft |
| [330](bip-0330.mediawiki) | Transaction announcements reconciliation | Gleb Naumenko, Pieter Wuille | Draft |
| [340](bip-0340.mediawiki) | Schnorr Signatures for secp256k1 | Pieter Wuille, Jonas Nick, Tim Ruffing | Draft |
| [341](bip-0341.mediawiki) | Taproot: SegWit version 1 spending rules | Pieter Wuille, Jonas Nick, Anthony Towns | Draft |
| [342](bip-0342.mediawiki) | Validation of Taproot Scripts | Pieter Wuille, Jonas Nick, Anthony Towns | Draft |