---
title: Unnamed RPG
summary: Systems Reference Document
template: rpg/page.html
description: Systems Reference Document for the Unnamed game system
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

### Determining Ability Scores

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

## Traits and Qualities

Traits in Unnamed are a framework for defining the abilities a character possesses. A Trait can be anything that describes an aspect of a character personality, profession, physical or mental characteristic, or even ethnicity. Unnamed doesn't have classes as seen in more traditional game systems, but instead uses Traits to compose them. This means that instead of defining a fixed set of classes, Unnamed provides the rules and logic to create any kind of class that can fit in the setting of an adventure. For the purpose of this document, we will often refer to the classic fantasy genre classes, such as barbarian, wizard, or paladin, but the game mechanics defined in this section can apply to every kind of setting. For example, a sci-fi adventure could implement a Star Captain archetype by defining the *Captain* Trait. Combining them with other similar but complementary Traits, such as *Ex Soldier* and *Calculating Mind*, would make for a great veteran captain, hardened by many battles and ready to challenge the vastness of space. Note that all the Traits cited in this document are just used as examples. GMs, players, and adventure designers are encouraged to come up with their own interesting Traits.

A character can have many Traits, starting with two and increasing their number as they gain more levels, up to a maximum of five Traits. Each Trait is defined by a set of *Qualities*, a short expression that describes something about that Trait. Traits start with three Qualities, and new ones can be added when a character levels up, to a maximum of 6 Qualities per Trait. When a roll is called, the character can add all the Qualities that make sense for the action or save being rolled. Each Quality chosen adds `1` to the roll.

Let's pretend that we're making a rogue, a skilled thief used to survive in the slums and capable of breaking in undetected. We'll use the [Standard Array](#standard-array) method and come up with the following ability scores:

```
STR: -1
DEX:  3
END:  0
PER:  2
WIL:  1
```

We'll then start by adding the Trait *Thief*. This Trait is defined by three Qualities: *sneaky*, *lockpicks*, and *agile*. Notice how two of them are adjectives, *sneaky* and *agile*, while the other is a noun. Qualities can be whatever short expression best represents the character's abilities. It is important, however, to try and keep the Qualities short and generic. Choosing Qualities that are too specific makes them hard to apply to varying circumstances.

The second Trait we'll add is *Charlatan*, with the following Qualities: *bluff*, *disguise*, and *sleight of hand*.

Here is a summary table:

| Thief      | Charlatan       |
| ---------- | --------------- |
| sneaky     | bluff           |
| lockpicks  | disguise        |
| agile      | sleight of hand |

Now let's imagine we're trying to break into a well-guarded mansion by lockpicking the rear door and sneaking into the empty kitchen.

***Game Master***: "The door is solid, but you reckon that the lock is pretty simple to pick."  
***Rogue***: "I use my lockpicks and try to open it without making a sound"  
***GM***: "Very well, make a DEX roll for me."  
***R***: "Sure, and I can add my *sneaky* and *lockpicks* Qualities to it. I rolled a 4, plus my DEX of 3 and 2 Qualities, makes a 9."  
***GM***: "You manage to open the lock without alerting the guards, but as you enter the kitchen you hear footsteps coming from the corridor.   It's probably a sentry patrolling the lower floor, and they'll spot you if they pass before the kitchen. What do you do?"  
***R***: "Is there any place I can hide, like a covered table or a cupboard?"  
***GM***: "Yes, there is a cupboard above the stove, but you'll need to jump over the workbench to reach it."  
***R***: "I try to do that without hitting any of the cutlery or plates on the table."  
***GM***: "Roll another DEX action for me. Do you have anything related to acrobatic or athletic?"  
***R***: "Well, I'm *agile*, so that should help. I rolled a 6."  
***GM***: "Absolutely. With a total of 10 you manage to leap over the table and hide in the cupboard just before the guards reach the kitchen door. They don't see you and move on."

### A note on races and archetypes

Unnamed doesn't define any concept of race, class, or archetype as seen in more traditional game systems. This is in hope of keeping the rules lightweight and flexible enough to be used in settings where these concept may not apply. However, these concepts can be easily implemented using Traits. For example, the Elf race can be implemented using the following Traits:

| Elf           | Magical          |
| ------------- | ---------------- |
| agile         | magic            |
| elven vision  | keen senses      |
| light weapons | magic resistance |

Being an *Elf*, they receive a boost when performing *agile* actions, such as acrobatic moves, jumps, and other DEX-related movement actions; *elven vision* improves PER rolls performed in the dark, or when looking at far away objects; *light weapons* makes them fight better when handling shortswords, light bows, and other small weapons. Also, being a *Magical* creature, they gain a bonus both when casting and defending from spells, and their *keen senses* makes them perceive their surroundings more easily. Remember that these are only suggestions. GMs and players may come up with whatever Qualities they prefer when creating their own unique Traits.

As you can see, Traits and Qualities allow to create interesting characters without locking them into predefined archetypes. Anything can be represented using a simple combination of words, and it gives much more freedom in defining a character personality than picking numbers from a predetermined table.

## Skills and Powers

Each character in Unnamed is an outstanding individual capable of performing incredible actions. These actions are represented by ***Skills*** and ***Powers***. Although mechanically very similar, they differ ever-so-slightly in the way they are described. A character starts with two Skills and two Powers, and can acquire more up to a maximum of five each. Skills and Powers are defined by their name and a short sentence describing their effect. 

Whenever a roll is called where a Skill or Power may apply given the context, the player may roll two dice instead of one, and keep the highest result.  Some Skills and Powers may have a more narrative application than plain dice roll. For example, *Shapeshifting* may grant a character the ability to change their external appearance for a limited period of time. GMs and players decide how to apply those abilities when it makes sense.

As with Traits, there is no predefined list of Skills and Powers in this document. GMs, players, and adventure designers are encouraged to come up with their own interesting Skills and Powers that make sense in the context of the setting and the player characters.

***Skills*** are acquired talents. They are learned through study, training, and practice. Some examples of Skills:

- *Precise shot*: You hold your breath, your target steady in sight, ready to take your shot.
- *Combat roll*: You plunge to the side and avoid an incoming blow, rolling on the floor and bouncing back up on your feet.
- *Dual wielding*: You hold one weapon in each hand, ready to strike your opponent down.

***Powers*** are innate abilities a character posseses. These are part of their essence and are developed with introspection and meditation. They are not taught, but instead emerge from the depth of mind and soul. Some examples of Powers:

- *Fireproof skin*: You are forged in the flames of Hell itself. Fire struggles to hurt you.
- *Shapeshifting*: You can hide your true appearance, changing your physical form for a short period of time.
- *Understanding emotions*: You can read another person's face and detect their emotional state, uncover lies, and spot deception.

### A note on magic and spells

Lorem ipsum

## Conditions

Lorem ipsum

## Items and equipment

Lorem ipsum

## Character progression

Unnamed characters can grow and change over the course of their perilous adventures. This is reflected in their **level**, a number ranging from 1 to 15 indicating how powerful and capable they are. Each character usually start al level 1, indicating an average common person, although some GMs or game settings may call for a higher starting level. Every now and then, the GM can decide to grant a character some **experience points** (XP), to represent their growth and personal development. The frequency and amount of XPs gifted to characters can vary wildly based on the setting, the action that has been performed, the pacing the GM wants to maintain, etc. When a character reaches a certain number of XPs, they can **level up**, increasing their level by 1. Every time a character levels up they can increase an [ability score](#ability-scores) by 1 and add a new Quality to one of their existing Trait. Depending on the level reached they can also either gain a new [Trait](#traits-and-qualities), or unlock a new skill or power. 

The exact progression path is detailed in the following table:

| Experience Points  | Level | Bonus gained |  
| ------------------ | ----- | ------------ |
| 0                  | 1     |              |
| 300                | 2     | new Skill    |
| 900                | 3     | new Trait    |
| 2,700              | 4     |              |
| 6,500              | 5     | new Power    |
| 14,000             | 6     |              |
| 23,000             | 7     | new Skill    |
| 34,000             | 8     | new Trait    |
| 48,000             | 9     |              |
| 64,000             | 10    | new Power    |
| 85,000             | 11    |              |
| 100,000            | 12    |              |
| 120,000            | 13    | new Trait    |
| 140,000            | 14    | new Skill    |
| 165,000            | 15    | new Power    |

When levelling up a character, always keep in mind the following limitations:

| Characteristic        | Starting at level 1 | Maximum |  
| --------------------- | ------------------- | ------- |
| Ability Scores        | *                   | 6       |
| Traits                | 2                   | 5       |
| Qualities (per Trait) | 3                   | 6       |
| Skills                | 2                   | 5       |
| Powers                | 2                   | 5       |

\* see the [ability scores](#ability-scores) section for more information on how to determine the starting values

## GM tips

Lorem ipsum

## Acknowledgements

There are many games and systems that influenced me while designing Unnamed. I can't of course avoid mentioning the great precursor of all modern RPGs, [Dungeons & Dragons]. Many aspects of Unnamed are taken from the classic D20 and six-scores system pioneered by D&D.

A special mention goes to [Lady Blackbird] by [John Harper], for inspiring the Traits and Qualities system. Lady Blackbird uses a similar scheme of Traits and tags that are used to influence rolls, although they are much more liberal in their application as our rolls are quite different. I also considered importing the dice pool and 50% dice mechanics from it, but I wanted something that could be played with just one or two dice for the entire table, as I don't feel that many beginner players have a huge collection of D6s at hand.

From [Skyfarer], the wonderful RPG system set in the world of [Fallen London], I took the use of the D10 instead of the more classic D20. I noticed while playing Skyfarer that the lower numbers generated by the die were easier to grasp for new players, while still keeping a light number-crunching feel that is more commonly found in more complicated RPG systems.

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