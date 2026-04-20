# Odin-Project-HashMap

**By Haidar Abas**

## Description

**Tech used: JS**

A hashmap data structure with basic functions for retrieval, removal and setting 
of key/value pairs. Data in the map is stored as nodes (objects) with references 
to the key, its value and the next node. This means that data stored at any given 
index is treated as a linked list (as a means of dealing with collisions).

At best the time complexity of the hashmap is Ω(1) (when there's only 1 data node 
at the given index) and at worst is O(n) (when theres more than 1 data node at the 
given index).