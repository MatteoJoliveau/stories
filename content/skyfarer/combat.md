+++
title = "Combat"
template = "skyfarer/page.html"
description = "A detailed combat module for Skyfarer"
draft = false

[extra]
icon = "fas fa-fist-raised"
cover = "skyfarer/sunlesskies.webp"
+++

# Engine-to-engine combat

The skies are a harsh and unwelcoming place. Players will face nightmarish monsters, star-maddened bandits and 
imposing engines determined to wipe them out.  
In an attempt to recreate the same vibe as [Sunless Skies], this addendum introduces a detailed combat system for fighting
aboard their steam locomotive.

This system focuses on the players and their role aboard the engine, so that everyone gets a chance of 
participating in the fight even if they are not steering or shooting. It borrows from other RPG systems while trying to stay true
to Skyfarer's rules and mechanics.

## Stats and rolls

Enemy engines and creatures have the same stats as players, and their value is used as a modifier for various combat
actions.

<p>{{ iron() }}: strength actions, like dealing damage, fleeing or pursuing </p>
<p>{{ mirrors() }}: aim and shoot, detect the players as they try to hide</p>
<p>{{ veils() }}: avoid shots, hide from the players</p>
<p>{{ hearts() }}: resist intimidation attempts</p>

Here is an example stats table for a *Star-Maddened Explorer*:

| {{ iron() }} | {{ mirrors() }} | {{ veils() }} | {{ hearts() }} |
|------|---------|-------|--------|
|  2   |    0    |   -1   |   1   |

### Initiative

At the beginning of the fight everyone rolls for initiative to determine the turn order. Rolling is done with a `d10` and adding the {{ hearts() }} modifier.
Traits and conditions apply as usual. For example, an engine with the *Fast* trait receives a `+1`, while being *Slow* on the other hand gives a `-1` modifier.
The GM ranks every participant in the fight in order of result, from highest to lowest. Each participant will play in this order until the end of the fight.

The players act as a single entity. They each roll their own initiative, adding their own modifier, and the highest roll is chosen for the entire crew.

> **Example**  
> The players are attacked by two Chorister Bees. They have a {{ hearts() }} stat of `1`.  
> The players roll `3d10`, one each, and score the following (adding their {{ hearts() }} stat):  
> `d10 + 1 = (8) + 1 = 9`  
> `d10 + 0 = (2) + 1 = 3`  
> `d10 - 1 = (7) - 1 = 6`  
> They keep the highest result, which is `9`.  
> The GM rolls `2d10` (one for each creature) and adds `1` for their {{ hearts() }}:  
> `d10 + 1 = (9) + 1 = 10`  
> `d10 + 1 = (7) + 1 = 8`  
> The order of action will therefore be:  
> 1) Chorister Bee  
> 2) Players  
> 3) Chorister Bee  

### Attacking

Attacks consist of two dice rolls, a `d10` for hitting and a `d6` for damages.

The `d10` is a roll-off between the {{ mirrors() }} of the attacker and the {{ veils() }} of the defender. If the attacker rolls
higher, the attack goes through. If the defender rolls higher, the attack misses.

When the players are attacking, the {{ mirrors() }} of the player manning the guns is used. When the players are defending, the {{ veils() }} of the
helmsman is used (since they are the one trying to avoid the shot).

Conditions and traits are applied as usual. Only one trait and one condition can be applied per roll.

Finally, the Profession of each player matters. If the player shooting the guns has the *Gunner* profession, it rolls **two dices** instead of one,
discarding the lowest result. The *Navigator* player receives the same benefit when defending from an attack. 

> **Example**  
> The players shoot the main cannon against the enemy engine. The enemy has a {{ veils() }} stat of `1`, while the player manning
> the guns has a {{ mirrors() }} stat of `2`. However, due to the *Drunk* condition they got earlier for drinking an entire bottle of wine alone, they have a `-1` to hit. They are the *Quartermaster* of the crew, so they only get one die to roll.  
> The gunner rolls a `d10` and gets an `8`. The result is `10` after adding the {{ mirrors() }} modifier, but is reduced to `9` by the gunner's intoxicated state.  
> The GM rolls a `d10` for the enemy, getting a `6` plus the {{ veils() }} modifier. Since the enemy engine has the trait *Tiny*, it gets an additional `+1` modifier for a total of `8`.  
> Since `9` is greater than `8`, the shot goes through.

When an attack lands successfully, damages are rolled. Rolling a `d6` and adding the {{ iron() }} modifier of the gunner and any condition or trait modifier.
As with the previous roll, having the *Gunner* profession grants an additional `d10` and the highest result is used.

> **Example**  
> The gunner rolls a `d6` and gets a `3`, plus `2` from their {{ iron() }}. The player's engine has the trait *Up-gunned*, so it gets an additional `+1` to damages, totalling `6` damages.  
> However, the enemy engine is *Heavily armoured*, so it applies a `-1` modifier to the roll. This results in a total of `5` damages being dealt.

The amount of damage an NPC engine or creature can sustain is determined by the GM. The following table contains a recommended amount of hit-points based on the difficulty of the challenge.

|     Challenge     |   HPs   |
|-------------------|---------|
|    low            |  5-10   |
|    medium         |  10-30  |
|    high           |  30-50  |
|    nightmarish    |  50+    |

Players don't have HPs. Instead, getting hit by an enemy increases their **Peril** by the result of a `d3` roll (rolling a `d6` and halving the result, rounding up). Every player's **Peril** increases simultaneously by
this amount. 

### Fleeing

TBD

`d10 + iron vs d10 + iron`

### Hiding

TBD

`d10 + veils vs d10 + mirrors`

### Intimidating

TBD

`d10 + hearts vs d10 + hearts`

## Actions

Actions are special rolls a player can perform that can have powerful effects or give an advantage during fights.
Every action can be performed by anyone, however having a specific Profession grants an additional die to roll, keeping the highest result.

GMs are encouraged to come up with new and exiting actions using this list as inspiration.

Players cannot perform Actions in the same turn they attack, flee, hide or intimidate. Only one action can be performed per turn.

Actions are performed by rolling a `d10` against a threshold set by the GM, based on the difficulty of the action in the current situation.  
The core rules suggest the following values:

|     Challenge     |   Success value   |
|-------------------|-------------------|
|       easy        |        6+         |
|       medium      |        8+         |
|       high        |        10+        |

Traits and conditions apply as usual. Failing an action may increase everyone's Peril if the outcome has some fallback.

### Dodge

Evade an incoming attack, avoiding all damage.  
This action can be performed out of turn, when an enemy declares an attack.

Skilled profession: **Navigator**

### Repair damages

Fix a leak in the hull, reducing an incoming peril roll by 1.  
Example: if this action succeeds, and the players scored a `2` when rolling a `d3` after getting hit, 
their Peril instead increases by `1`.

Skilled profession: **Engineer**

### Overcharge the engine

Run the boiler at increased pressure, granting more speed.  
This action allows fleeing instantly without having to roll, but increases everyone's Peril by a `d3` since the engine risks exploding. 

Skilled profession: **Stoker**

### Negotiate

Convince an angry Marauder to let you go unharmed.  
That was so close it increases everyone's Peril by 1.

Skilled professions: **Signaller, First Officer**

### Hawkeye

A precise shot right between the eyes.  
Automatically hit the next shot without needing to roll.

Skilled profession: **Gunner**

### Resupply

A bottle of mead can heal the strongest of fears.  
Reduce everyone's Peril by 1.

Skilled profession: **Quartermaster**

## Roll tables

This section contains a few tables for generating traits and stats. They are merely suggestions and GMs are
encouraged to come up with interesting traits and conditions for their games!

### Traits

This table contains example traits for NPC engines and sky-beasts, as well as the modifier they apply to rolls.

| Roll  |       Trait        |                        Effect                        |
|-------|--------------------|------------------------------------------------------|
|   1   |   Heavily armoured |    -1 to received damage rolls                       |
|   2   |   Jury-rigged      |    +1 to received damage rolls                       |
|   3   |   Imposing         |    -1 to defending accuracy rolls                    |
|   4   |   Tiny             |    +1 to defending accuracy rolls                    |
|   5   |   Up-gunned        |    +1 to dealt damage rolls                          |
|   6   |   Dangerous        |    +1 when intimidating or resisting intimidation    |
|   7   |   Slow             |    -1 when trying to flee                            |
|   8   |   Fast             |    +1 when trying to flee                            |
|   9   |   Noisy            |    -1 when trying to hide                            |
|   10  |   Silent           |    +1 when trying to hide                            |

[Sunless Skies]: https://www.failbettergames.com/sunless-skies/
