let
  pkgs = import <nixpkgs> {};
  unstable = import <nixos-unstable> {};
in
pkgs.mkShell {
    buildInputs = with pkgs; [
      unstable.zola
      nodejs-14_x
      yarn
    ];
}
