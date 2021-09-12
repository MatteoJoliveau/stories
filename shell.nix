let
  pkgs = import <nixpkgs> {};
in
pkgs.mkShell {
    buildInputs = with pkgs; [
      unstable.zola
      nodejs-14_x
      yarn
      pandoc
      texlive.combined.scheme-small
      gnome.librsvg
    ];
}
