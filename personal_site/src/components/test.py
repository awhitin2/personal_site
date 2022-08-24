

def round(p1, p2):
    winner = False
    pot = []
    while not winner:
        p1_card = p1.play_card()
        p2_card = p2.play_card()
        pot.extend([p1_card, p2_card])
        if p1_card > p2_card:
            p1.award_cards(pot)
            winner = True
        elif p2_card > p1_card:
            p2.award_cards(pot)
            winner = True




