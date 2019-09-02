import React from 'react';
import { Link } from 'gatsby';
import Flag from './Flag/Flag';
import useSiteMetadata from '../hooks/use-site-config';
import styled from 'styled-components';
import { colors } from '../tokens';

// 내가 추가
const Post = styled.article`
  padding: 5px;

  & > header {
    padding: 0;
    display: grid;
    grid-template-columns: max-content auto;
  }

  @media (max-width: 780px) {
    & > header {
      display: block;
    }
  }
`;

const PostDate = styled.time`
  color: ${colors.textLight};
  display: inline-block;
  margin-right: 10px;
  margin-top: 6px;

  &:before {
    content: '';
    margin-right: 0.2rem;
  }

  @media (max-width: 780px) {
    font-size: 13px;
    display: block;
  }
`;

const PostHeader = styled.header`
  padding: 1em 0;
`;

const PostTitleLink = styled(Link)`
  font-size: 17px;
  display: inline-block;
  // color: ${colors.primary};
  color: #555;
  margin-right: 5px;
  line-height: 1.7;
  border-bottom: 1px solid #fff;
  margin-left: 5px;

  &:hover {
    // border-bottom: 1px dotted ${colors.primary};
    border-bottom: 1px dotted #555;
  }

  @media (max-width: 780px) {
    font-size: 15px;
    margin-left: 3px;
  }
`;

const H2Style = {
  display: 'inline-block'
};

const AllPostsListItem = props => {
  const { title, excerpt, slug, date, language, tags } = props;
  const { multilangPosts } = useSiteMetadata();

  return (
    <Post>
      <PostHeader>
        <PostDate>{date}</PostDate>
        <h2 style={H2Style}>
          <PostTitleLink to={`/${slug}`}>
            {multilangPosts && <Flag language={language} />}
            {title}
          </PostTitleLink>
        </h2>
        {/*<TagList tags={tags} icon={true} />*/}
      </PostHeader>
      <footer></footer>
    </Post>
  );
};
export default AllPostsListItem;
