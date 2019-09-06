---
title: 다시 시작하는 블로깅?
slug: 2017-01-20-first-jekyll-posting
date: 2017-01-20
cover: './cover.jpg'
generate-card: false
language: ko
tags:
  - programming
  - blog
---

## 다시 블로그를 시작해볼까

대학교 다닐 때, 티스토리를 이용하여 안드로이드와 관련해서 블로그를 운영했었는데, 졸업은 한 뒤로는 손을 놓아버렸다. 하는 일도 많아져서 정신도 없을 뿐더러, 쓸만한 주제도 마땅치않다보니, 점점 마음 속에서 자연스레 사라진 것 같다. 그렇지만 항상 마음 한켠에는 블로깅에 대한 아쉬움이 있었다. 최근들어 자전거를 친구들과 자주 탔는데, 자전거 그룹의 대장이 항상 같이 라이딩을 하고 나서는 블로그로 글을 남겼는데, 왠지 그런 글들이 더욱 뜻깊게 다가왔다. 같이 살고 있는 친구도 게임을 오픈하면서 카페를 만들었는데, 사람도 없는대도 불구하고 복작복작 글을 쓰는 것을 보니, 나도 블로그나 다시 한번 해볼까하는 생각이 들었다. 대학교 때 블로그가 문득 떠오르기도 하고.

## 블로그를 선택하자

일단 블로깅을 다시 해보자는 결심이 서고 나니, 어떤 블로그 플랫폼을 쓸까에 대해 고민을 많이 했다. 예전에 사용하던 티스토리 블로그 이어서 할까? 아니면 새롭게 티스토리 계정을 생성해서 해볼까? 아니면 네이버 블로그? 직접 서버를 돌리고 있으니 워드프레스도 괜찮지 않을까? 이것저것 고민을 해보았으나, 딱 마음에 드는 것이 없었다. 그나마 티스토리가 괜찮았었는데, 블로그 API가 없어지고, 백업도 안되게 되었단다. 예전에는 툴을 이용해서 로컬에서 작업을 해서 블로그 API를 이용해서 퍼블리싱을 해었는데, 이제는 그렇게 할 수가 없었다. 더군다나 백업이 안된다는 것은...!? 이것 저것 검색을 해보다가, jekyll과 GitHub Pages를 이용하여 블로깅을 할 수 있다는 것을 알게 되었다. 예전에 GitHub Pages를 이용하여, 간단한 웹사이트는 퍼블리싱 해보았는데, 정적인 홈페이지는 사용하기에 좋을 것 같다고 생각했었는데, 블로그로 사용할 수 있으리라고는 생각을 못했다. 그것을 가능하게 해주는 것이 jekyll! 그래서 한번 해보기로 했다.

jekyll을 선택한 또 다른 이유는 마크다운 언어와 버전관리 때문이다. 예전에 블로깅을 하면서 구성지게 보이려 하려고, html 작업을 많이했는데, 노력에 비해 좋은 퀄리티가 안나왔다. 마크다운으로 작업을 하면 일정한 포맷을 유지하면서 깔끔하게 작업을 할 수 있으니 더할 나위 없을듯. 기존에 사용하던 Git을 이용하여 버전관리가 가능하니 이 또한 좋지 아니한가. jekyll을 통해 로컬에서도 바로 블로그 전체를 볼 수 있고, 글을 작성하는 와중에도 바로바로 프리뷰를 통해 볼 수 있으니 금상첨화. 더군다나 개발자스러운 툴인 것 같아 더 마음에 든다.

## jekyll + GitHub Pages 블로그의 장점

- GitHub Pages로 무료 호스팅
- 마크다운 언어로 작성 가능
- 버전관리 가능
- 로컬 테스트 가능
- 왠지모를 +개발자스러움

## 적절한 테마

jekyll에 테마를 입혀 블로그를 좀 더 꾸밀 수 있는데, 마음에 드는 테마가 딱히 없었다. 심플하면서도, 멋져보이고 싶은데, 테마들이 다 외국스럽다고 할까. 이것저것 찾아보다가, [kakao 기술 블로그가 GitHub Pages로 간 까닭은](http://tech.kakao.com/2016/07/07/tech-blog-story/)이라는 글을 보았는데, 카카오도 Jekyll을 이용해서 GitHub Pages로 한다는 것을 알게 되었고, 이 블로그 디자인이 굉장히 마음에 들어, 이것을 가져와서 수정하면 되겠다는 생각을 했다. 기본 구조도 잘 나뉘어져 있고, 내가 원하는 기능들이 있어서 참고할만한 프로젝트인 것 같다. 물론 디자인도 차차 내 스타일대로 바꿀 예정이다. (문제가 되진 않겠지...?) 카카오의 오픈소스를 많이 참고해봐야겠다. Jekyll의 공식 문서를 보고, 그 양에 상당히 놀랐는데(멘붕. 굉장히 간단할 줄 알았는데...) 앞서간 사람들의 코드를 보니 훨씬 빨리 습득하게 되는 것 같다.

## References

- [kakao 기술 블로그가 GitHub Pages로 간 까닭은](http://tech.kakao.com/2016/07/07/tech-blog-story/)
- [Atom을 마크다운(Markdown) 에디터로 사용하기](http://futurecreator.github.io/2016/06/14/atom-as-markdown-editor/)

abcd?