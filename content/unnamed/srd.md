---
title: Unnamed RPG
summary: System Reference Document
template: rpg/page.html
description: System Reference Document for the Unnamed game system
draft: false
date: 2021-08-21
updated: 2021-08-21

extra:
  icon: fas fa-cogs

  badges:
    - name: OGL 1.0a
      image: https://img.shields.io/badge/license-OGL%201.0a-blue
      path: '@/ogl.md'
    - name: PDF
      image: https://img.shields.io/badge/download-pdf-green
      url: /unnamed/srd.pdf
    - name: HTML
      image: https://img.shields.io/badge/download-html-green
      url: /unnamed/srd.html
  author: Matteo Joliveau
---

_Version 0.1.0_  

## Introduction

Lorem ipsum


## Ability scores

There are five major ability scores in Unnamed: ***Strength***, ***Dexterity***, ***Endurance***, ***Perception*** and ***Will***. Each score has a value from -1 to 6, where -1 represents incompetence and 6 means excellence. An average human person will likely have 1 in most scores. Scores can be increased when levelling up, but can never exceed the value of 6.

***Strength (STR)*** represents your physical power and is used for every action where muscles are involved, such as athletic activities, climbing, fighting in hand-to-hand combat, smashing objects, etc.

***Dexterity (DEX)*** determines how agile you are, and how good your hand-eye coordination is. It is also representative of your reflexes
and ability to use precision tools (such as lockpicks or repair tools), handle delicate objects, move silently, perform acrobatics, and every other situation where finesse is required. It is also the primary score for ranged attacks using bows and crossbows, guns and rifles, throwing
knives, etc.

***Endurance (END)*** measures your ability to withstand physical strain. It is involved in every action where your body is put to the test, 
like resisting a hostile environment (smoke, acid, cold or hot air, etc), running or swimming for long periods of time, holding your breath, etc. It is also used when receiving damage in combat, as a character with high ***Endurance*** will suffer less physical damage than one with a lower score.

***Perception (PER)*** describes your ability to perceive the world around you. When you attempt to listen, smell, see, read another character's intentions, or otherwise use your senses, you are using your ***Perception***. 

***Will (WIL)*** is your mental fortitude. It represents how strong your mind is and how easily you can handle stressful situations, as well as
your persuasiveness and ability to bluff or influence others with your words. In settings where magic exists it is also the primary
score used for spellcasting.

Scores can be determined via the following methods. Note that these are merely suggestions. You are invited to come up with your own system that might suit your game best.

#### Standard Array

The Standard Array is a default set of five numbers that allow to build a pretty well-balanced character for most scenarios. This is the recommended method. The numbers are the following:

```
3 2 1 0 -1
```

You can distribute them however you like. For instance, let's pretend we are making a raging, strong but pretty dull barbarian warrior. Their scores could be defined as such:

```
STR:  3
DEX:  1
END:  2
PER:  0
WIL: -1
```

#### Dice roll

Ability scores can be randomly determined by rolling a `6d6`, lowering all results by 2, and discarding the lowest. For example, let's consider the following roll:

```
6 - 2 =  4
2 - 2 =  0
3 - 2 =  1
1 - 2 = -1
1 - 2 = -1
5 - 2 =  3
```

One of the two `-1` is discarded as the lowest number. We are then left with `4`, `0`, `1`, `-1` and `3`. Since we are building a sorcerer, a magical warrior not really interested in physical prowess, we choose to distribute the numbers in the following way:

```
STR:  -1
DEX:   1
END:   0
PER:   3
WIL:   4
```

#### Point Buy

When using the Point Buy method, all ability scores start at the default value of `0`. You then have 5 points to spend among them to increase their value. You can also subtract points from them, they are then added to your pool.

For example, we could build a cunning, survivalist Ranger with the following set:

```
STR:  0 - 1 = -1
DEX:  0 + 3 =  3
END:  0 + 0 =  0
PER:  0 + 2 =  2
WIL:  0 + 1 =  1
```

Notice that we subtracted one point from her ***Strength***, since she will often prefer to use her bow and arrows over a sword, and increased the other scores by a total of 6 points.

## Dice rolls

Every action in Unnamed is represented by a dice roll. Rolling dice brings an element of randomness to the game, and often leads to interesting choices from the players. All actions and rolls are done using a `d10`. Additionally, most rolls are associated with an [ability score](#abilitiy-scores). In that case, the relevant ability score is added to the result.

*Actions* happen when a player character or an NPC willfully do something. The result of the roll determines if the action succeeds or fails.
The GM decides what threshold must be reached or surpassed by the roll to be considered a success, otherwise the action fails. Additionally, the GM may decide to set a higher threshold that, if reached, will give the character an extra bonus. For example, a DEX roll of `8` would allow the player to safely leap over a crumbling bridge, but a `10` would also make the bridge collapse behind them, stopping the enemies in pursuit.

*Saves rolls* are made in response to an action. A save roll might be called to avoid an incoming attack, resist an intimidation attempt, or generally anytime something is *being done to* a character. If the roll is successful, the character avoids the danger. Otherwise, they succumb to the peril and the action follows through.

An *opposing check* happens when two actions collide with each other. A prime example of opposing check is a grapple. Two characters struggling to overpower each other will perform an opposing STR check to see who will prevail. Note that performing an action to avoid another action is considered a save, not an opposing check. For example, plunging sideways to avoid an arrow is a DEX save, because the character is not trying to prevent the arrow from being shot, but rather is avoiding the consequences of the shot being fired. An opposing check in this situation would have been a standoff between two archers, with the winner of the roll shooting first.

Some common thresholds based on the difficulty of the actions are: `6` for a **simple** challenge, `8` for a **difficult** challenge, and `10` for a **nearly impossible** challenge. Note that these numbers are merely suggestions. GMs and adventure designers are encouraged to choose the roll thresholds that make the most sense for each specific scenario.

## Traits and qualities

Traits in Unnamed are mechanically akin to classes in more traditional game systems, but instead of being a defined set of features, skills and martial proficiences, they are a framework for defining the abilities a character possesses. The actual implementation is left to the game master and the players, or to the author of a game setting.

This means that instead of defining a fixed set of classes, Unnamed provides the rules and logic to create any kind of class that can fit in the setting of an adventure. For the purpose of this document we will often refere to the classic fantasy genre classes, such as barbarian, wizard or paladin, but the game mechanics defined in this section can apply to every kind of setting. For example, a sci-fi adventure could implement a Star Captain archetype by defining the *Captain* trait. Combining them with other similar but complementary traits, such as *Ex Soldier* and *Calculating Mind*, would make for a great veteran captain, hardened by many battles and ready to challenge the vastness of space. Note that all the traits cited in this document are just used as examples. GMs, players and adventure designers are encouraged to come up with their own interesting traits.

A character can have many traits, starting with three and increasing their number as they gain more levels. Each trait is defined by a set of *qualities*, a short expression that describe something about that trait. Traits start with three qualities, although new ones can be added when a character levels up. When a roll is called, the character can add all the qualities that make sense for the action or save being rolled. Each quality chosen adds `1` to the roll.

Let's pretend that we're making a rogue, a skilled thief used to survive in the slums and capable of breaking in undetected. We'll use the [Standard Array](#standard-array) method and come up with the following ability scores:

```
STR: -1
DEX:  3
END:  0
PER:  2
WIL:  1
```

We'll then start by adding the trait *Thief*. This trait is defined by three qualities: *sneaky*, *lockpicks*, and *agile*. Notice how two of them are adjectives, *sneaky* and *agile*, while the other is a noun. Qualities can be whatever short expression best represents the character's abilities. It is important, however, to try and keep the qualities short and generic. Choosing qualities that are too specific makes them hard to apply to varying circumstances.

The second trait we'll add is *Charlatan*, with the following qualities: *bluff*, *disguise*, and *sleight of hand*.

Finally, we add the trait *Street raised*, defined by: *resourceful*, *quick*, and *daggers*.

Here is a summary table:

| Thief      | Charlatan       | Street raised |
| ---------- | --------------- | ------------- |
| sneaky     | bluff           | resourceful   |
| lockpicks  | disguise        | quick         |
| agile      | sleight of hand | daggers       |

Now let's imagine we're trying to break into a well-guarded mansion by lockpicking the rear door and sneaking into the empty kitchen.

***Game Master***: "The door is solid, but you reckon that the lock is pretty simple to pick."  
***Rogue***: "I use my lockpicks and try to open it without making a sound"  
***GM***: "Very well, make a DEX roll for me."  
***R***: "Sure, and I can add my *sneaky* and *lockpicks* qualities to it. I rolled a 4, plus my DEX of 3 and 2 qualities, makes a 9."  
***GM***: "You manage to open the lock without alerting the guards, but as you enter the kitchen you hear footsteps coming from the corridor.   It's probably a sentry patrolling the lower floor, and they'll spot you if they pass before the kitchen. What do you do?"  
***R***: "Is there any place I can hide, like a covered table or a cupboard?"  
***GM***: "Yes, there is a cupboard above the stove, but you'll need to jump over the workbench to reach it."  
***R***: "I try to do that without hitting any of the cutlery or plates on the table."  
***GM***: "Roll another DEX action for me. Do you have anything related to acrobatic or athletic?"  
***R***: "Well, I'm *agile* and *quick*, so that should help. I rolled a 6."  
***GM***: "Absolutely. With a total of 11 you manage to leap over the table and hide yourself in the cupboard just before the guards reach the kitchen door. They don't see you and move on."

As you can see, Traits and Qualities allow to create interesting characters without locking them into predefined archetypes. Anything can be represented using a simple combination of words, and it gives much more freedom in defining a character personality than picking numbers from a predetermined table.

## Skills and Powers

Lorem ipsum

## Conditions

Lorem ipsum

## Items and equipment

Lorem ipsum

## Character progression

Lorem ipsum

## GM tips

Lorem ipsum

## Acknowledgements

There are many games and systems that influenced me while designing Unnamed. I can't of course avoid mentioning the great precursor of all modern RPGs, [Dungeons & Dragons]. Many aspects of Unnamed are taken from the classic D20 and six-scores system pioneered by D&D.

A special mention goes to [Lady Blackbird] by [John Harper], for inspiring the traits and qualities system. Lady Blackbird uses a similar scheme of traits and tags that are used to influence rolls, although they are much more liberal in their application as our rolls are quite different. I considered also importing the dice pool and 50% dice mechanics from it, but I wanted something that could be played with just one or two dice for the entire table, as I don't feel that many beginner players have a huge collection of D6s at hand.

From [Skyfarer], the wonderful RPG system set in the world of [Fallen London], I took the use of the D10 instead of the more classic D20. I noticed while playing Skyfarer that the lower numbers generated by the die where easier to grasp for new players, while still keeping a light number-crunching feel that is more commonly found in more complicated RPG systems.

## Licensing

Copyright © 2021 Matteo Joliveau. All Rights Reserved. Licensed under the [Open Game License 1.0a](@/ogl.md).

### Product Identity

The following items are hereby identified as Product Identity, as defined in the Open Game License 1.0a, Section 1(e), and are not Open Content: All trademarks, registered trademarks, proper names (characters, icons, etc.), dialogue, plots, storylines, locations, characters, artworks, and trade dress. (Elements that have previously been designated as Open Game Content are not included in this declaration.)

### Open Content

Except for material designated as Product Identity (see above), the game mechanics of this game product are Open Game Content, as defined in the Open Game License version 1.0a Section 1(d). No portion of this work other than the material designated as Open Game Content may be reproduced in any form without written permission.

[Dungeons & Dragons]: https://dnd.wizards.com/
[Lady Blackbird]: https://ladyblackbird.org
[John Harper]: http://www.onesevendesign.com/
[Skyfarer]: https://failbetter-games.itch.io/skyfarer
[Fallen London]: https://www.fallenlondon.com