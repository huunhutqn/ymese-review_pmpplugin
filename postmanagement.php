<?php
/**
 * @package Post_Management
 * @version 1.0
 * 
 * Plugin Name: Post_Management
 * Plugin URI: https://example.com
 * Description: I don't know
 * Version: 1.0
 * Author: :)
 */

function restriction_column($columns)
{
  // add restriction column
  $columns['restriction'] = 'Restriction';

  // reorder restriction stand before category
  $n_columns = array();
  $move = 'restriction'; // what to move
  $before = 'categories'; // move before this
  foreach ($columns as $key => $value) {
    if ($key == $before) {
      $n_columns[$move] = $move;
    }
      $n_columns[$key] = $value;
  }

  return $n_columns;
}
// register restriction colum
add_filter( 'manage_posts_columns', 'restriction_column' );

function show_restriction_column($name) {
  global $post;
  // printf('posst: '.$post);
  // var_dump($post);
  // echo 'naem: '.$name;
  switch ($name) {
    case 'restriction':
      $restriction = get_post_meta($post->ID, 'role', true);
      if (!$restriction) {
        echo '<a class="pmp__edit" href="#" data-id="'.$post->ID.'" onClick="postmanagement(this)">Haven\'t role <span class="dashicons dashicons-edit pmp__edit-icon"></span></a>';
      } else
        echo '<a class="pmp__edit" href="#" data-id="'.$post->ID.'" onClick="postmanagement(this)">'.$restriction.' <span class="dashicons dashicons-edit pmp__edit-icon"></span></a>';
  }
}
// show restriction column content
add_action( 'manage_posts_custom_column' , 'show_restriction_column');

// register script
function postmanagement_script()
{
  // wp_enqueue_script( 'postmanagement_react2', plugins_url() ."/postmanagement/js/2.8b8006e9.chunk.js", array(), null, true );
  // wp_enqueue_script( 'postmanagement_react1', plugins_url() ."/postmanagement/js/main.0526b6f1.chunk.js", array(), null, true );
  wp_enqueue_script( 'postmanagement_react1', plugins_url() ."/postmanagement/reactjs/dist/pmp_bundle.js", array(), null, true );
  wp_enqueue_script( 'postmanagement', plugins_url() ."/postmanagement/js/postmanagement.js", array(), null, true );
  // wp_enqueue_script( 'postmanagement_react3', plugins_url() ."/postmanagement/js/runtime-main.81d14aa4.js", array(), null, true );
}
add_action( 'admin_enqueue_scripts', 'postmanagement_script' );

// register style
// function postmanagement_style()
// {
//   wp_register_style( 'postmanagement_style1', plugins_url() ."/postmanagement/css/2.bea6f0b1.chunk.css" );
//   wp_enqueue_style( 'postmanagement_style1' );
//   wp_register_style( 'postmanagement', plugins_url() ."/postmanagement/css/main.a880b086.chunk.css" );
//   wp_enqueue_style( 'postmanagement' );
// }
// add_action( 'admin_enqueue_scripts', 'postmanagement_style' );

function add_popup()
{
  add_action( 'admin_footer', 'insert_popup');
}
function insert_popup()
{
  echo '
    <!-- The Post Management plugin -->
    <div id="restriction-editing" class="pmp">
    </div>
    ';
}
// add element popup to wp-footer
add_action( 'manage_posts_custom_column', 'add_popup' );