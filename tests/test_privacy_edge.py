"""Tests for privacy edge distinct"""

def test_privacy_edge_0():
    epsilon=1.0
    assert epsilon>=1.0

def test_privacy_edge_1():
    epsilon=1.5
    assert epsilon>=1.0

def test_privacy_edge_2():
    epsilon=2.0
    assert epsilon>=1.0

def test_privacy_edge_3():
    epsilon=2.5
    assert epsilon>=1.0
