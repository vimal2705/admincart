import React, {useEffect} from 'react';
import {StyleSheet, FlatList, SafeAreaView,Text,View} from 'react-native';

// redux
import {getPosts} from '../action/post';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

// to render empty container
import EmptyContainer from '../componenets/EmptyContainer';
import Post from '../componenets/Post';

const Home = ({getPosts, postState, userDetails}) => {
  // getting post on component mount
  
  useEffect(() => {
      console.log("HOME COMP", postState.posts)
    getPosts();
  }, []);

  // if post is fetching from DB then rendering empty component
  if (postState.loading) {
    return <EmptyContainer />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={postState.posts}
        keyExtractor={(item) => item.id}
        renderItem={({item, index, separators}) => (
        
           <Post item={item} userDetails={userDetails} key={item.id} />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text>No post found</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  postState: state.post,
  userDetails: state.auth.user,
});

const mapDispatchToProps = {
  getPosts,
};

Home.propTypes = {
  getPosts: propTypes.func.isRequired,
  postState: propTypes.object.isRequired,
  userDetails: propTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    justifyContent: 'flex-start',
    padding: 4,
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#1b262c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
