---
title: '이더리움을 익히면서 【 마스터링 이더리움 - 안드레아스 M. 안토노풀로스, 개빈 우드 】'
slug: 2019-07-17-mastering-ethereum
date: 2019-07-17
generate-card: false
language: ko
cover: './cover.jpg'
tags:
  - book
---

# 마스터링 이더리움 - 스마트 컨트랙트 및 댑 구축하기

블록체인을 알게 된지 2-3년의 시간이 지났다. 스타트업을 하고 있었고, 이것에 집중하기 위해 다른 것들에 관심가지는 것을 포기했었다. 2년이 지나고 보니, 내가 개발자로서의 역할을 제대로 못하고 있었다는 것을 알게 되었다. 어쩌면 많은 것들을 할 수 있었을 수도 있는 시간에, 개발과 상관없는 일에 매여 있었던 것이 아쉽다. 지금이라도 해보면 좋을 것 같아 블록체인 중 이더리움에 관해 알아보기로 했다.

이더리움은 월드 컴퓨터이다. 스마트 컨트랙트를 기반으로 돌아간다. 전 세계에 걸쳐 탈중앙화된 컴퓨텅 인프라를 지칭한다. 블록체인을 사용하여 상태 변화를 저장하고 동기화하며, 이더라고 하는 암호화폐를 이용하여 실행 자원 비용을 측정하고 제한한다. 고가용성, 감사 가능성, 투명성, 중립성을 제공하는 동시에 검열을 줄이거나 없애고, 거래 상대방의 위험을 줄인다. 블록체인이 가진 특성인 개방적이고, 공공적이며, 국제화, 탈중앙화, 중립성, 검열저항성의 특징을 가진다.

이더리움은 개발자가 개발자를 위해 만든 개발자 블록체인에 가깝다고 한다. 그만큼 댑 개발을 위해 만들어져있다고 볼 수 있다. 댑은 범용적인 블록체인 환경에서 탈중앙화 애플리케이션을 만드는 것을 말한다. 스마트 컨트랙트와 웹 사용자 인터페이스를 합쳐서 유저가 사용할 수 있도록 한다.

사실 이더리움의 하위 계층에 있는 구조는 매우 어렵게 느껴졌다. 개인키, 디지털 서명 등의 암호학에 대해 잘 알아야 하기 때문이다. 이 부분은 이해하기 어려워 흐름만 이해하고 넘어갔다.

내가 가장 알고 싶었던 부분은 솔리디티와 바이퍼의 사용법이었다. 실제로 스마트 컨트랙트를 만들기 위해 알아야할 부분이기 때문이다. 스마트 컨트랙트를 개발할 때 알아야할 보안 이슈들에 대해 몇 가지 사례를 가지고 설명해주었다. 이더리움 플랫폼에서 보안은 매우 중요하다. 실제로 경제적인 자원인 이더가 오고 가기 때문이다. 모든 것을 이해하진 못했지만, 전반적인 이더리움에 대해 알 수 있었다. 조금 더 깊게 공부해보면서 실제로 디앱을 개발해 보아야겠다.

---

## 스마트 컨트랙트 및 댑 구축하기

### 이더리움

월드 컴퓨터. 스마트 컨트랙트라는 프로그램을 실행하는 오픈 소스에 기반을 둔, 전 세계에 걸쳐 탈중앙화된 컴퓨팅 인프라스트럭처.

### 특성

블록체인을 사용하여 시스템의 상태 변화를 동기화하고 저장하며, 이더(ether)라고 하는 암호화폐를 이용하여 실행 자원 비용을 측정하고 제한한다.

이더리움 플랫폼을 사용하여 경제적 기능을 내장한 강력하면서도 탈중아화된 애플리케이션을 개발할 수 있다. 고가용성, 감사 가능성, 투명성, 중립성을 제공하는 동시에 검열을 줄이거나 없애고, 거래상대방의 위험을 줄인다.

블록체인의 특성 : 개방성, 공공성, 국제화, 탈중앙화, 중립성, 검열저항성

댑 : 범용적인 블록체인에서 탈중아화 애플리케이션. 스마트 컨트랙트와 웹 사용자 인터페이스를 합한 것. 댑은 공개되고 탈중화된 피어투피어 기반 서비스 위에 제공되는 웹 애플리케이션이다.

이더리움은 개발자가 개발자를 위해 만든 개발자의 블록체인.

암호학 : 개인키, 이더리움 주소, 디지털 서명. (어렵게 느껴지는 부분이다.)

공개키 암호화와 암호화폐 (예전에 배웠지만 어렵다.)

지갑(wallet) 키를 보관하고 관리하기 위해 사용되는 시스템. 모든 지갑은 키 관리 구성요소를 갖고 있다.

트랜잭션. 외부 소유 계정에 의해 서명된 메시지, 이더리움 네트워크에 의해 전송되고 이더리움 블록체인에 기록된다. 이더리움은 글로벌 싱글톤 상태 머신. 모든 것은 트랜잭션으로부터 시작된다.

### 그 밖에

- 스마트 컨트랙트와 솔리디티
- 솔리디티. 사용법.
- 바이퍼. 사용법.
- 스마트 컨트랙트 보안
