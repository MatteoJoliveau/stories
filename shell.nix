let
  pkgs = import <nixpkgs> {};
in
pkgs.mkShell {
    buildInputs = with pkgs; [
      zola
      nodejs-14_x
      yarn
    ];
}
