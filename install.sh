#!/bin/bash

for F in bin etc .bash_profile .bashrc .gitconfig .js .screenrc .vim .vimrc .node_libraries; do
  SRC="${PWD}/${F}"
  DEST="${HOME}/${F}"
  echo mv "${DEST}" "${DEST}.orig"
  mv "${DEST}" "${DEST}.orig"
  echo ln -s "${SRC}" "${DEST}"
  ln -s "${SRC}" "${DEST}"
done
